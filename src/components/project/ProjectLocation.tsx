"use client";

type ProjectLocationProps = {
  project: {
    slug: string;
    title: string;
    location?: string;
    nearbyLandmarks?: string[];
  };
};

const mapEmbeds: Record<string, string> = {
  "supraja-iris-resort-plots":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8183.9651954877745!2d77.78669037624174!3d17.633323871052095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc953e9e3ac09bb%3A0xfbf45f72331801f1!2sSupraja%20IRIS%20Resorts!5e1!3m2!1sen!2sin!4v1780043173712!5m2!1sen!2sin",

  "bridge-county":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8183.9651954877745!2d77.78669037624174!3d17.633323871052095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc953e9e3ac09bb%3A0xfbf45f72331801f1!2sSupraja%20IRIS%20Resorts!5e1!3m2!1sen!2sin!4v1780043173712!5m2!1sen!2sin",

  "sindhu-sarovar":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511.8695815160396!2d77.8786709080152!3d17.50183945649242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc957dabf153fa9%3A0x794f231ecb9cce5e!2sSupraja%20Sindhuja%20Sarovar!5e1!3m2!1sen!2sin!4v1780043266570!5m2!1sen!2sin",

  "subhash-meadows":
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d511.8047095687335!2d78.16270280975331!3d17.524852435391264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1780043343336!5m2!1sen!2sin",
};

export default function ProjectLocation({
  project,
}: ProjectLocationProps) {
  const mapSrc = mapEmbeds[project.slug];

  return (
    <section className="bg-white py-20">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            Prime Location Advantage
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            Strategic Location & Connectivity
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            {project.title} is strategically located near major growth
            corridors, educational institutions, highways and upcoming
            infrastructure developments around Hyderabad.
          </p>
        </div>

        {/* Nearby Landmarks */}
        {project.nearbyLandmarks &&
          project.nearbyLandmarks.length > 0 && (
            <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {project.nearbyLandmarks.map((landmark) => (
                <div
                  key={landmark}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm"
                >
                  <p className="font-semibold text-slate-800">
                    {landmark}
                  </p>
                </div>
              ))}
            </div>
          )}

        {/* Google Map */}
        {mapSrc && (
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <iframe
              src={mapSrc}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${project.title} Google Map`}
              className="w-full"
            />
          </div>
        )}
      </div>
    </section>
  );
}