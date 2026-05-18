export const projects = [
  {
    num: '01',
    tag: 'Quant Research',
    title: 'trading-bot',
    desc: 'Indian-equity research bot — scanners + multi-source sentiment + event-driven edges feed an XGBoost predictor with an LLM-calibrated probability gate. Vol-targeted sizing, automated postmortems, and a self-learning RAG loop close the cycle.',
    tech: ['Python', 'XGBoost', 'Claude', 'Qwen 2.5', 'Qdrant', 'Kite Connect'],
    private: true,
    tall: true,
    code: `# phase3/predict.py
def emit_signal(ticker, features):
    prob       = xgb.predict_proba(features)[1]
    calibrated = claude_calibrate(prob, features)
    edge       = calibrated - cost_of_trade(ticker)

    if edge >= EDGE_THRESHOLD and regime.allows_entry():
        return Signal(ticker, prob=calibrated, edge=edge)
    return None`,
  },
  {
    num: '02',
    tag: 'Portfolio',
    title: 'portfolio',
    desc: 'This site. React + Vite + Tailwind, particle-field hero, 3D orbital tech stack, hidden bento-style personal page behind a glitch transition, and a session-scoped night mode.',
    tech: ['React', 'Vite', 'Tailwind v4', 'Canvas'],
    github: 'https://github.com/pulkitdhingraa/portfolio',
    live: 'https://dhngr.com',
    wide: true,
  },
  {
    num: '03',
    tag: 'Infrastructure',
    title: 'devops-lab',
    desc: 'DevOps personal mini projects portfolio — Terraform modules, CI/CD pipelines, Kubernetes manifests, and infrastructure-as-code patterns.',
    tech: ['HCL', 'Terraform', 'Docker', 'K8s', 'GitHub Actions'],
    github: 'https://github.com/pulkitdhingraa/devops-lab',
  },
  {
    num: '04',
    tag: 'Automation',
    title: 'sh-py-scripts',
    desc: 'Shell and Python automation scripts for DevOps workflows, system admin, and cloud operations.',
    tech: ['Python', 'Bash', 'AWS CLI'],
    github: 'https://github.com/pulkitdhingraa/sh-py-scripts',
  },
]
