 import { ShieldCheck, Eye, Server, CheckCircle } from "lucide-react";
 
 // === Dynamic Data ===
 export const mainTitle = "Packed with Innovation,";
  export const highlight = "Powered by AiELM";
  export const description1 =
    "AiELM brings together cutting-edge AI capabilities that transform compliance,";
  export const description2 = "training, and workflow efficiency.";


  export const cards = [
    {
      icon: "ShieldCheck",
      title: "AI-Speech Recognition",
      desc: `Built-in speech recognition enables real-time <br /> language proficiency testing, adaptive <br/> learning, and conversational AI tutors that <br/> engage every learner.`,
    },
    {
      icon: "Eye",
      title: "Vision Capabilities",
      desc: "Through facial recognition, eye-tracking, and <br/> micro-expression analysis, AiELM provides <br/> deep insights into focus, engagement, and <br/> learner behavior.",
    },
    {
      icon: "Server",
      title: "Seamless API Integrations",
      desc: "AiELM connects effortlessly with HRIS, ERP, <br/> LMS, and compliance systems, ensuring <br/> smooth workflows and data flow across your <br/> enterprise.",
    },
  ];

  export const features = [
    {
      label: "Trusted Authentication:",
      desc: "With multi-<br/> modal biometrics and continuous<br/> identity checks, AiELM guarantees <br/> secure, verified learning sessions that <br/> meet the compliance standards.",
    },
    {
      label: "Real-Time Data:",
      desc: "AiELM captures and<br/> processes data live, delivering instant<br/> dashboards, compliance alerts, and<br/> actionable insights when you need<br/> them most.",
    },
    {
      label: "Predictive Analytics:",
      desc: "Powered by AI<br/> models, AiELM predicts training<br/> outcomes, workforce risks, and<br/> efficiency gains, turning learning into a<br/> strategic advantage.",
    },
  ];

  // Icon mapping for flexible rendering
export const icons = {
  ShieldCheck,
  Eye,
  Server,
  CheckCircle,
};