import fs from 'node:fs';

const replacements = {
  'src/components/home/HeroSection.tsx': [
    [
`        <p className="mx-auto mb-6 max-w-4xl text-sm leading-6 text-slate-200 sm:mb-8 sm:text-base sm:leading-7 md:text-lg md:leading-relaxed">
          Meticulously planned plotted projects across Kamkole, Sangareddy,
          Mominpet and Indrakaran, anchored to infrastructure corridors and
          engineered for sustained capital appreciation.
        </p>`,
`        <p className="mx-auto mb-6 max-w-4xl text-sm leading-6 text-slate-200 sm:mb-8 sm:text-base sm:leading-7 md:text-lg md:leading-relaxed">
          Explore <strong className="font-semibold text-white">DTCP and RERA approved open plots near Hyderabad</strong> across
          Kamkole, Sangareddy, Mominpet and Indrakaran, with projects planned
          around established and emerging infrastructure corridors.
        </p>`
    ]
  ],
  'src/components/home/ProjectsSection.tsx': [
    [
`          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#334155]">
            Every Sri Supraja Infracon project is chosen for what surrounds it
            - universities, transit corridors, employment hubs - not just what's
            built on it. Four projects, each at a different stage of maturity,
            offer entry points suited to different investment timelines.
          </p>`,
`          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#334155]">
            Every Sri Supraja Infracon project is chosen for what surrounds it
            - universities, transit corridors and employment hubs - not just what&apos;s
            built on it. Our portfolio includes <strong className="font-semibold text-[#07111F]">gated community plots near Hyderabad</strong>,
            resort-inspired developments and plotted communities across different
            growth corridors, each suited to a different ownership requirement.
          </p>`
    ]
  ],
  'src/app/projects/projects-client.tsx': [
    [
`            <p
              className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-[#4B5563]"
            >
              Explore Sri Supraja Infracon projects across Kamkole, Mominpet,
              Sangareddy and Indrakaran, including resort-inspired plots,
              residential project layouts, and future-focused land ownership
              opportunities.
            </p>`,
`            <p
              className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-[#4B5563]"
            >
              Explore Sri Supraja Infracon projects across Kamkole, Mominpet,
              Sangareddy and Indrakaran, including <strong className="font-semibold text-[#111827]">open plots for sale near Hyderabad</strong>,
              resort-inspired communities and residential plotted developments
              positioned around established and emerging growth corridors.
            </p>`
    ],
    [
`          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-[#4B5563]">
            Our projects are planned across locations influenced by improving
            connectivity, education hubs, employment activity, and regional
            infrastructure. Each project offers a different ownership perspective
            based on location, scale, lifestyle value, and future relevance.
          </p>`,
`          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-[#4B5563]">
            Our projects are planned across locations influenced by improving
            connectivity, education hubs, employment activity and regional
            infrastructure. Buyers comparing <strong className="font-semibold text-[#111827]">plots in Sangareddy and Hyderabad growth corridors</strong> can
            evaluate each project by location, scale, lifestyle value and current
            development context.
          </p>`
    ]
  ],
  'src/app/open-plots-and-resorts-in-hyderabad/OpenPlotsResortsClient.tsx': [
    [
`          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-slate-200">
            Compare Sri Supraja Infracon plotted developments across Kamkole,
            Mominpet, Indrakaran and nearby growth corridors. Review project
            locations, approval details, infrastructure context and direct links
            to each project before planning a site visit.
          </p>`,
`          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-slate-200">
            Compare <strong className="font-semibold text-white">open plots and resort-style projects near Hyderabad</strong> across Kamkole,
            Mominpet, Indrakaran and nearby growth corridors. Review project
            locations, approval details, infrastructure context and direct links
            to each project before planning a site visit.
          </p>`
    ],
    [
`              <p>
                A useful comparison starts with the project itself, not with a
                broad promise about future returns. Buyers should review the
                applicable layout approval, RERA registration where relevant,
                survey details, access roads, current development status and the
                intended use of the plot.
              </p>`,
`              <p>
                A useful comparison starts with the project itself, not with a
                broad promise about future returns. Buyers considering <strong className="font-semibold text-[#111827]">DTCP approved plots near Hyderabad</strong> should
                review the applicable layout approval, RERA registration where
                relevant, survey details, access roads, current development status
                and the intended use of the plot.
              </p>`
    ],
    [
`              <p>
                Location should then be evaluated in context. Kamkole and the
                Sadashivapet side of the NH-65 corridor are influenced by
                educational, hospitality and regional infrastructure activity.
                Mominpet and Indrakaran serve different buyer requirements, so
                price alone is not a meaningful way to compare them.
              </p>`,
`              <p>
                Location should then be evaluated in context. Buyers looking at
                <strong className="font-semibold text-[#111827]"> open plots in Kamkole</strong> should consider the Sadashivapet side of the NH-65 corridor,
                nearby education and hospitality activity, and actual road access.
                Mominpet and Indrakaran serve different buyer requirements, so
                price alone is not a meaningful way to compare them.
              </p>`
    ]
  ],
  'src/app/about/about-client.tsx': [
    [
`                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-200"
                  >
                    Sri Supraja Infracon has spent over 24 years turning approved layouts 
                    and planned projects into long-term value for Hyderabad and Telangana families.
                  </motion.p>`,
`                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-200"
                  >
                    Sri Supraja Infracon has spent over 24 years as a <strong className="font-semibold text-white">real estate developer near Hyderabad</strong>,
                    creating approved layouts and planned communities for families
                    and land buyers across Telangana growth corridors.
                  </motion.p>`
    ]
  ]
};

for (const [file, pairs] of Object.entries(replacements)) {
  let text = fs.readFileSync(file, 'utf8');
  for (const [from, to] of pairs) {
    if (!text.includes(from)) {
      throw new Error(`Expected source block not found in ${file}`);
    }
    text = text.replace(from, to);
  }
  fs.writeFileSync(file, text);
  console.log(`Updated ${file}`);
}
