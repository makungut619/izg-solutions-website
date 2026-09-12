"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DigitalCardsShowcase from "@/components/work/DigitalCardsShowcase";
import {
  categories,
  digitalCards,
  projects as allProjects,
  type Project,
  type WorkCategory,
} from "@/app/work/projects";

type Filter = WorkCategory | "All";

/**
 * Device mockup. Priority: animated loop (media) -> static image -> placeholder.
 * The flat background is baked into the images, so `accent` is used only as a
 * loading backdrop and the media is shown edge-to-edge with object-contain.
 */
function Mockup({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const { media, image, accent, title } = project;

  return (
    <div
      className="relative w-full aspect-[16/10] overflow-hidden rounded-xl"
      style={{ backgroundColor: accent }}
    >
      {media ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={media.poster}
          className="w-full h-full object-contain"
        >
          {media.webm && <source src={media.webm} type="video/webm" />}
          {media.mp4 && <source src={media.mp4} type="video/mp4" />}
        </video>
      ) : image ? (
        <Image
          src={image}
          alt={`${title} website shown on a laptop and phone`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
          priority={priority}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {/* Simple two-device silhouette placeholder */}
          <div className="flex items-end gap-3 opacity-90">
            <div className="w-28 h-20 md:w-40 md:h-28 rounded-md bg-white/15 border border-white/25 backdrop-blur-sm" />
            <div className="w-9 h-20 md:w-12 md:h-28 rounded-md bg-white/20 border border-white/30 backdrop-blur-sm" />
          </div>
          <span className="mt-4 text-white/80 text-xs font-medium uppercase tracking-widest">
            {title}
          </span>
          <span className="mt-1 text-white/50 text-[11px]">
            Mockup coming soon
          </span>
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const Icon = project.icon;

  return (
    <div
      className={`group rounded-2xl border border-surface-100 bg-white overflow-hidden hover:border-primary-200 hover:shadow-lg transition-all duration-300 h-full flex ${
        featured ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      <div className={featured ? "md:w-3/5 p-4 md:p-6" : "p-4"}>
        <Mockup project={project} priority={featured} />
      </div>

      <div
        className={`flex flex-col ${
          featured ? "md:w-2/5 p-6 md:p-8 md:justify-center" : "px-6 pb-6"
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
            <Icon className="text-primary-600" size={16} />
          </div>
          <span className="text-xs text-primary-600 font-medium uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <h3
          className={`font-bold text-surface-900 ${
            featured ? "text-2xl md:text-3xl mb-2" : "text-xl mb-1"
          }`}
        >
          {project.title}
        </h3>
        <p className="text-sm text-surface-400 mb-3">{project.industry}</p>

        <p
          className={`text-surface-700 font-medium leading-snug mb-2 ${
            featured ? "text-lg" : "text-[15px]"
          }`}
        >
          {project.result}
        </p>
        <p className="text-surface-500 text-sm leading-relaxed">
          {project.description}
        </p>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            onClick={() =>
              window.izg?.track("work_visit_click", {
                project: project.slug,
              })
            }
          >
            Visit site <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function WorkGallery() {
  const [filter, setFilter] = useState<Filter>("All");

  const featured = useMemo(
    () => allProjects.find((p) => p.featured),
    []
  );

  // Only show filter tabs for categories that actually have content.
  // "All" always shows when there is more than one populated category.
  const visibleCategories = useMemo(() => {
    const present = new Set<WorkCategory>(allProjects.map((p) => p.category));
    if (digitalCards.length > 0) present.add("Digital Card");
    const populated = categories.filter(
      (c) => c.value !== "All" && present.has(c.value as WorkCategory)
    );
    return populated.length > 1
      ? [categories[0], ...populated]
      : populated;
  }, []);

  const gridProjects = useMemo(() => {
    // On "All", the featured project is shown as a large hero above the grid,
    // so exclude it here. On any category filter there is no hero, so include
    // every matching project (featured included) as a normal card.
    if (filter === "All") return allProjects.filter((p) => !p.featured);
    return allProjects.filter((p) => p.category === filter);
  }, [filter]);

  const showFeatured = filter === "All" && featured;
  const showCards =
    (filter === "All" || filter === "Digital Card") && digitalCards.length > 0;
  const isEmpty = gridProjects.length === 0 && !showCards && !showFeatured;

  return (
    <div className="container-narrow">
      {/* Filter row (hidden when only one category exists) */}
      {visibleCategories.length > 1 && (
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-10">
            {visibleCategories.map((cat) => {
              const active = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => {
                    setFilter(cat.value);
                    window.izg?.track("work_filter", { category: cat.value });
                  }}
                  className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                    active
                      ? "bg-primary-600 border-primary-600 text-white"
                      : "bg-white border-surface-200 text-surface-600 hover:border-primary-300 hover:text-primary-600"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>
      )}

      {/* Digital cards showcase first (full-width shared tile) */}
      {showCards && (
        <AnimatedSection className="mb-8">
          <DigitalCardsShowcase />
        </AnimatedSection>
      )}

      {/* Featured (only on All) */}
      {showFeatured && (
        <AnimatedSection className="mb-8">
          <ProjectCard project={featured} featured />
        </AnimatedSection>
      )}

      {/* Grid */}
      {gridProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {gridProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {isEmpty && (
        <p className="text-surface-400 text-center py-12">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
