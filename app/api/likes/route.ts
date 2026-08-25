import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const slug = searchParams.get("slug");
    const visitorId = searchParams.get("visitorId");

    if (!slug) {
      return NextResponse.json(
        { error: "Missing slug" },
        { status: 400 }
      );
    }

    // Get total likes
    const { data: likesRow, error: likesError } = await supabase
      .from("likes")
      .select("count")
      .eq("slug", slug)
      .maybeSingle();

    if (likesError) {
      console.error("Supabase likes GET error:", likesError);

      return NextResponse.json(
        { error: "Failed to load likes" },
        { status: 500 }
      );
    }

    let liked = false;

    // Check whether this visitor already liked this reflection
    if (visitorId) {
      const { data: likedByRow, error: likedByError } = await supabase
        .from("liked_by")
        .select("id")
        .eq("slug", slug)
        .eq("visitor_id", visitorId)
        .maybeSingle();

      if (likedByError) {
        console.error("Supabase liked_by GET error:", likedByError);

        return NextResponse.json(
          { error: "Failed to check like status" },
          { status: 500 }
        );
      }

      liked = !!likedByRow;
    }

    return NextResponse.json({
      likes: likesRow?.count ?? 0,
      liked,
    });
  } catch (error) {
    console.error("Likes GET error:", error);

    return NextResponse.json(
      { error: "Failed to load likes" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const slug = body.slug;
    const visitorId = body.visitorId;

    if (!slug || !visitorId) {
      return NextResponse.json(
        { error: "Missing slug or visitorId" },
        { status: 400 }
      );
    }

    // Check whether visitor already liked this reflection
    const { data: existingLike, error: existingError } =
      await supabase
        .from("liked_by")
        .select("id")
        .eq("slug", slug)
        .eq("visitor_id", visitorId)
        .maybeSingle();

    if (existingError) {
      console.error(
        "Supabase liked_by lookup error:",
        existingError
      );

      return NextResponse.json(
        { error: "Failed to check existing like" },
        { status: 500 }
      );
    }

    // Already liked
    if (existingLike) {
      const { data: currentLikes } = await supabase
        .from("likes")
        .select("count")
        .eq("slug", slug)
        .maybeSingle();

      return NextResponse.json({
        likes: currentLikes?.count ?? 0,
        liked: true,
      });
    }

    // Record this visitor's like
    const { error: insertLikeError } = await supabase
      .from("liked_by")
      .insert({
        slug,
        visitor_id: visitorId,
      });

    if (insertLikeError) {
      // Unique index protects against duplicate likes
      if (insertLikeError.code === "23505") {
        const { data: currentLikes } = await supabase
          .from("likes")
          .select("count")
          .eq("slug", slug)
          .maybeSingle();

        return NextResponse.json({
          likes: currentLikes?.count ?? 0,
          liked: true,
        });
      }

      console.error(
        "Supabase liked_by insert error:",
        insertLikeError
      );

      return NextResponse.json(
        { error: "Failed to record like" },
        { status: 500 }
      );
    }

    // Get current count
    const { data: currentLikes, error: countError } = await supabase
      .from("likes")
      .select("id, count")
      .eq("slug", slug)
      .maybeSingle();

    if (countError) {
      console.error("Supabase count lookup error:", countError);

      return NextResponse.json(
        { error: "Failed to load like count" },
        { status: 500 }
      );
    }

    let newCount = 1;

    if (currentLikes) {
      newCount = currentLikes.count + 1;

      const { error: updateError } = await supabase
        .from("likes")
        .update({
          count: newCount,
        })
        .eq("id", currentLikes.id);

      if (updateError) {
        console.error(
          "Supabase likes update error:",
          updateError
        );

        return NextResponse.json(
          { error: "Failed to update like count" },
          { status: 500 }
        );
      }
    } else {
      const { error: insertCountError } = await supabase
        .from("likes")
        .insert({
          slug,
          count: 1,
        });

      if (insertCountError) {
        console.error(
          "Supabase likes insert error:",
          insertCountError
        );

        return NextResponse.json(
          { error: "Failed to create like count" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      likes: newCount,
      liked: true,
    });
  } catch (error) {
    console.error("Likes POST error:", error);

    return NextResponse.json(
      { error: "Failed to update likes" },
      { status: 500 }
    );
  }
}