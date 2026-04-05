export const experience = [
  {
    title: 'Software Engineer 2 (DevOps)',
    company: 'Candescent',
    date: 'Oct 2024 \u2014 Present',
    current: true,
    bullets: [
      'Migrated K8s traffic from Ingress-NGINX to Gateway API',
      'Automated 15+ AWS services with Terraform (\u201380% setup time)',
      'Integrated SAST/SCA into CI/CD pipelines',
      'Built observability stack, reduced AWS costs by 25%',
      'Managed production incidents & RCA with GSRE',
    ],
  },
  {
    title: 'Software Engineer 2',
    company: 'NCR Voyix',
    date: 'Apr 2023 \u2014 Sep 2024',
    current: false,
    bullets: [
      'Reduced cold-start latency from 520ms to 270ms (JVM + HPA tuning)',
      'Improved Git branching & semantic versioning with hooks',
      'Linux sysadmin & automation, reducing manual effort by 40%',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'NCR',
    date: 'Sep 2021 \u2014 Mar 2023',
    current: false,
    bullets: [
      'Cut build time by 75% with parallel Jenkins stages & caching',
      'Multi-stage Dockerfiles for standardized base images',
      'Deployed 10+ microservices with K8s manifests & Helm',
      'Re-architected bare-metal K8s (Flannel\u2192Calico, Docker\u2192Containerd)',
    ],
  },
]
