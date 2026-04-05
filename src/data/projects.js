export const projects = [
  {
    num: '01',
    tag: 'Infrastructure',
    title: 'devops-lab',
    desc: 'DevOps personal mini projects portfolio \u2014 Terraform modules, CI/CD pipelines, Kubernetes manifests, and infrastructure-as-code patterns.',
    tech: ['HCL', 'Terraform', 'Docker', 'K8s', 'GitHub Actions'],
    github: 'https://github.com/pulkitdhingraa/devops-lab',
    tall: true,
    code: `# main.tf
resource "aws_eks_cluster" "main" {
  name     = var.cluster_name
  role_arn = aws_iam_role.eks.arn
  version  = "1.28"

  vpc_config {
    subnet_ids = var.subnet_ids
  }
}`,
  },
  {
    num: '02',
    tag: 'Automation',
    title: 'sh-py-scripts',
    desc: 'Shell and Python automation scripts for DevOps workflows, system admin, and cloud operations.',
    tech: ['Python', 'Bash', 'AWS CLI'],
    github: 'https://github.com/pulkitdhingraa/sh-py-scripts',
  },
  {
    num: '03',
    tag: 'System Design',
    title: 'go-lld-examples',
    desc: 'Low Level Design patterns in Go \u2014 clean architecture, SOLID principles, real-world design examples.',
    tech: ['Go', 'Design Patterns'],
    github: 'https://github.com/pulkitdhingraa/go-lld-examples',
  },
  {
    num: '04',
    tag: 'Portfolio',
    title: 'portfolio-website',
    desc: 'Personal portfolio \u2014 dhngr.com. Modern web tech with 3D animations, particle fields, and interactive design elements.',
    tech: ['React', 'Vite', 'Tailwind', 'Three.js'],
    github: 'https://github.com/pulkitdhingraa/portfolio-website',
    live: 'https://dhngr.com',
    wide: true,
  },
]
