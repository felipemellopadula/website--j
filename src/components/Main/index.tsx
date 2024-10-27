import React, { useState } from "react";
import styles from "./Main.module.scss";
import video_ae02A from "../../assets/video_ae02A.mp4";
import socialMedia from "../../assets/social_media.mp4";
import gestaoTrafego from "../../assets/gestao_trafego.mp4";
import timeCriativos from "../../assets/time_criativos.mp4";
import pecasPublicitarias from "../../assets/pecas_publicitarias.mp4";
import filmes from "../../assets/filmes_midias_digitais.mp4";
import webDesign from "../../assets/web_design.mp4";
import copy from "../../assets/copy_redacao.mp4";

interface Resource {
  id: string;
  title: string;
  videoSrc: string;
}

const resources: Resource[] = [
  { id: "modelos", title: "Ideia", videoSrc: video_ae02A },
  { id: "texto", title: "Social Media", videoSrc: socialMedia },
  { id: "adesivos", title: "Gestão de Tráfego", videoSrc: gestaoTrafego },
  { id: "banco-midia", title: "Time de Criativos", videoSrc: timeCriativos },
  {
    id: "campanhas",
    title: "Campanhas Publicitárias",
    videoSrc: pecasPublicitarias,
  },
  {
    id: "filme",
    title: "filmes para Tv e mídias ditiais",
    videoSrc: filmes,
  },
  { id: "web", title: "Web-design", videoSrc: webDesign },
  { id: "copy", title: "Copy e Redação", videoSrc: copy },
];

export const Main: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Soluções em comunicação personalizadas para o seu negócio.
      </h1>
      <p className={styles.subtitle}>
        Faça com quem entende do assunto e está há 31 anos no mercado, ajudando
        empresas ao redor do mundo.
      </p>
      <div className={styles.gallery}>
        {resources.map((resource, index) => (
          <div
            key={resource.id}
            className={`${styles.item} ${
              activeId === resource.id ? styles.active : ""
            } ${index === 0 ? styles.first : ""}`}
            onMouseEnter={() => setActiveId(resource.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            <video src={resource.videoSrc} autoPlay loop muted />
            <span className={styles.itemTitle}>{resource.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
