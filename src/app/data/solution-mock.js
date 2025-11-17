import { ShieldCheck, Eye, Server, CheckCircle } from 'lucide-react';

// === Dynamic Data ===
export const mainTitle = 'Packed with Innovation,';
export const highlight = 'Powered by AiELM';
export const description1 =
  'AiELM brings together cutting-edge AI capabilities that transform compliance,';
export const description2 = 'training, and workflow efficiency.';

export const cards = [
  {
    icon: 'ShieldCheck',
    title: 'AI-Speech Recognition',
    desc: `Built-in speech recognition enables real-time\n language proficiency testing, adaptive\n learning, and conversational AI tutors that\n engage every learner.`,
  },
  {
    icon: 'Eye',
    title: 'Vision Capabilities',
    desc: 'Through facial recognition, eye-tracking, and\n micro-expression analysis, AiELM provides\n deep insights into focus, engagement, and\n learner behavior.',
  },
  {
    icon: 'Server',
    title: 'Seamless API Integrations',
    desc: 'AiELM connects effortlessly with HRIS, ERP,\n LMS, and compliance systems, ensuring\n smooth workflows and data flow across your\n enterprise.',
  },
];

export const features = [
  {
    label: 'Trusted Authentication:',
    desc: 'With multi-\n modal biometrics and continuous\n identity checks, AiELM guarantees\n secure, verified learning sessions that\n meet the compliance standards.',
  },
  {
    label: 'Real-Time Data:',
    desc: 'AiELM captures and\n processes data live, delivering instant\n dashboards, compliance alerts, and\n actionable insights when you need\n them most.',
  },
  {
    label: 'Predictive Analytics:',
    desc: 'Powered by AI\n models, AiELM predicts training\n outcomes, workforce risks, and\n efficiency gains, turning learning into a\n strategic advantage.',
  },
];

// Icon mapping for flexible rendering
export const icons = {
  ShieldCheck,
  Eye,
  Server,
  CheckCircle,
};
