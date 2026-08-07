export default function GoodShepherdPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] py-24">
      <article className="mx-auto max-w-3xl px-6">

        {/* Blog Header */}

        <p className="uppercase tracking-[0.45em] text-sm text-[var(--gold)]">
          SELAH
        </p>

        <h1 className="mt-3 font-serif text-5xl md:text-7xl text-[var(--sea-800)]">
          The Good Shepherd
        </h1>

        <p className="mt-8 text-lg leading-8 text-[var(--muted)] italic">
          Selah – Simple meditations that become writings, answers, poems,
          revelations through the Word of God, transforming us every day.
        </p>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

        {/* Poem */}

        <div className="space-y-8 text-xl leading-[2.2] text-[var(--text)]">

          <p>
            My worries and anxieties weigh heavily;
            <br />
            They pull me down like Earth's gravity.
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

        {/* Scripture */}

        <div className="mt-20 rounded-3xl bg-[var(--sea-100)] p-10 border border-[var(--sea-200)]">

          <p className="font-serif text-3xl text-[var(--sea-800)] leading-relaxed italic">
            "The Lord is my Shepherd; I shall not want."
          </p>

          <p className="mt-6 uppercase tracking-[0.35em] text-sm text-[var(--gold)]">
            Psalm 23:1
          </p>

        </div>

      </article>
    </main>
  );
}