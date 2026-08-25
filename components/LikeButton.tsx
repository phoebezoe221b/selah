"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

type LikeButtonProps = {
  postSlug: string;
};

export default function LikeButton({ postSlug }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLikes() {
      try {
        const response = await fetch(
          `/api/likes?slug=${encodeURIComponent(postSlug)}`
        );

        if (!response.ok) {
          throw new Error("Failed to load likes");
        }

        const data = await response.json();

        setLikes(data.likes ?? 0);
        setLiked(data.liked ?? false);
      } catch (error) {
        console.error("Could not load likes:", error);
      } finally {
        setLoading(false);
      }
    }

    loadLikes();
  }, [postSlug]);

  async function handleLike() {
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: postSlug,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update like");
      }

      const data = await response.json();

      setLikes(data.likes ?? likes);
      setLiked(data.liked ?? !liked);
    } catch (error) {
      console.error("Could not update like:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleLike}
      disabled={loading}
      aria-label={liked ? "Unlike this reflection" : "Like this reflection"}
      className="
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-[var(--border)]
        bg-white/80
        px-5
        py-3
        text-[var(--sea-800)]
        shadow-[0_10px_30px_rgba(24,61,54,.06)]
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[var(--gold)]
        hover:shadow-[0_15px_35px_rgba(24,61,54,.1)]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      <Heart
        size={21}
        strokeWidth={1.7}
        className={`
          transition-all
          duration-300
          ${
            liked
              ? "fill-[var(--gold)] text-[var(--gold)]"
              : "text-[var(--sea-700)] group-hover:text-[var(--gold)]"
          }
        `}
      />

      <span className="text-sm font-medium sm:text-base">
        {likes}
      </span>

      <span className="text-sm text-[var(--muted)] sm:text-base">
        {liked ? "Liked" : "Like"}
      </span>
    </button>
  );
}