import { IconDefinition, icon } from '@fortawesome/fontawesome-svg-core';
import {
  faCube, faHashtag, faCode, faUser, faBriefcase,
  faFolderOpen, faGears, faCertificate, faEnvelope,
  faArrowRight, faRobot, faLayerGroup, faDownload, faEye,
  faSun, faMoon, faChevronRight, faCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

export const iconMap: Record<string, IconDefinition> = {
  cube: faCube,
  hashtag: faHashtag,
  code: faCode,
  user: faUser,
  briefcase: faBriefcase,
  folder: faFolderOpen,
  gears: faGears,
  certificate: faCertificate,
  envelope: faEnvelope,
  github: faGithub,
  linkedin: faLinkedin,
  x: faSquareXTwitter,
  arrow: faArrowRight,
  robot: faRobot,
  layer: faLayerGroup,
  download: faDownload,
  view: faEye,
  sun: faSun,
  moon: faMoon,
  chevron: faChevronRight,
  circle: faCircle,
};

export function fa(iconName: string): IconDefinition {
  return iconMap[iconName] ?? faCircle;
}
