import LikeButton from "@/components/LikeButton";

export default function GoodShepherdPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-5 py-24 sm:px-6 sm:py-32">
      <article className="mx-auto max-w-3xl">

        {/* Blog Header */}

        <p className="text-sm uppercase tracking-[0.45em] text-[var(--gold)]">
          SELAH
        </p>

        <h1 className="mt-3 font-serif text-5xl text-[var(--sea-800)] sm:text-6xl md:text-7xl">
          The Good Shepherd
        </h1>

        <p className="mt-8 text-lg leading-8 italic text-[var(--muted)]">
          Selah – Simple meditations that become writings, answers,
          poems, revelations through the Word of God,
          transforming us every day.
        </p>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

        {/* Reflection */}

        <div className="space-y-10 text-lg leading-[2.1] text-[var(--foreground)] sm:text-xl sm:leading-[2.2]">

          <p>
            My worries and anxieties weigh heavily;
            <br />
            They pull me down like Earth&apos;s gravity.
            <br />
            Who will set me free from this?
          </p>

          <p>
            I felt an arm reach out and hold me
            <br />
            In the midst of these sinking sands.
            <br />
            Firm yet tender were His hands.
            <br />
            He pulled me up from the deepest pit,
            <br />
            Set me on His shoulders, and
            <br />
            Carried me beyond my fears.
          </p>

          <p>
            Jesus is His name—
            <br />
            Wonderful Saviour and my Rescuer,
            <br />
            Shepherd in my time of need.
            <br />
            He led me on the path of righteousness.
            <br />
            Oh, how joyful it is
            <br />
            That He has restored my soul.
          </p>

        </div>

        {/* Like */}

        <div className="mt-16 flex justify-center sm:justify-start">
          <LikeButton postSlug="the-good-shepherd" />
        </div>

        {/* Reflection Question */}

        <div className="mt-20">

          <h2
            className="
              font-serif
              text-3xl
              text-[var(--sea-800)]
              sm:text-4xl
            "
          >
            Take a Moment
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
            What fear or burden do you need to place
            into the Shepherd&apos;s hands today?
          </p>

          <textarea
            className="
              mt-8
              h-40
              w-full
              resize-none
              rounded-3xl
              border
              border-[var(--sea-200)]
              bg-white/50
              p-5
              text-base
              text-[var(--foreground)]
              outline-none
              transition
              placeholder:text-[var(--muted)]
              focus:border-[var(--gold)]
              focus:ring-1
              focus:ring-[var(--gold)]
              sm:p-6
            "
            placeholder="Write your reflection..."
          />

        </div>

      </article>
    </main>
  );
}