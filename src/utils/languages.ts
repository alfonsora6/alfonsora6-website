export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  docker: {
    name: "Docker",
    iconName: "docker",
  },
  kubernetes: {
    name: "Kubernetes",
    iconName: "kubernetes",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  ansible: {
    name: "Ansible",
    iconName: "ansible",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "!bg-[#f6ece1]",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  apache: {
    name: "Apache",
    iconName: "apache",
  },
  tomcat: {
    name: "Tomcat",
    iconName: "tomcat",
  },
  wildfly: {
    name: "Wildfly",
    iconName: "wildfly",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  nginx: {
    name: "Nginx",
    iconName: "nginx",
  },
  oracle: {
    name: "Oracle",
    iconName: "oracle",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  terraform: {
    name: "Terraform",
    iconName: "terraform",
  },
  postgresql: {
    name: "PostgreSQL",
    iconName: "postgresql",
  },
  openstack: {
    name: "Openstack",
    iconName: "openstack",
  },
  azure: {
    name: "Microsoft Azure",
    iconName: "azure",
  },
  bash: {
    name: "Bash",
    iconName: "bash",
  },
  vagrant: {
    name: "Vagrant",
    iconName: "vagrant",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 