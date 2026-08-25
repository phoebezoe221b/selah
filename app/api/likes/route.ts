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

    if (!slug) {
      return NextResponse.json(
        { error: "Missing slug" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("likes")
      .select("count")
      .eq("slug", slug)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Supabase GET error:", error);

      return NextResponse.json(
        { error: "Failed to load likes" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      likes: data?.count ?? 0,
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

    if (!slug) {
      return NextResponse.json(
        { error: "Missing slug" },
        { status: 400 }
      );
    }

    const { data: existing, error: findError } = await supabase
      .from("likes")
      .select("id, count")
      .eq("slug", slug)
      .single();

    if (findError && findError.code !== "PGRST116") {
      console.error("Supabase lookup error:", findError);

      return NextResponse.json(
        { error: "Failed to update likes" },
        { status: 500 }
      );
    }

    if (existing) {
      const { data, error } = await supabase
        .from("likes")
        .update({
          count: existing.count + 1,
        })
        .eq("id", existing.id)
        .select("count")
        .single();

      if (error) {
        console.error("Supabase update error:", error);

        return NextResponse.json(
          { error: "Failed to update likes" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        likes: data.count,
      });
    }

    const { data, error } = await supabase
      .from("likes")
      .insert({
        slug,
        count: 1,
      })
      .select("count")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        { error: "Failed to create likes" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      likes: data.count,
    });
  } catch (error) {
    console.error("Likes POST error:", error);

    return NextResponse.json(
      { error: "Failed to update likes" },
      { status: 500 }
    );
  }
}