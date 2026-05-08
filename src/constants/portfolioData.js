import myd from "../assets/myd3.png";
import myd2 from "../assets/myd2.png";
import kazze from "../assets/kazze1.png";
import kazze2 from "../assets/kazze2.png";
import fyf2 from "../assets/fyf2.png";
import fyf1 from "../assets/fyf1.png";

export const projects = [
    {
      id: 1,
      title: "Miño y Dávila S.R.L",
      category: "Editorial",
      description: "App web de administración para administrar stock, proveedores, cuentas corrientes, etc. Permitiendo a su vez poder automatizar procesos y reducir la carga manual.",
      isDemo: true,
      image: myd,
      image2: myd2,
      tags: ["Diseño", "App Web", "Automatización"],
      demoUrl: "https://myd-demo.vercel.app/login",
      repoUrl: "",
    },
    {
      id: 2,
      title: "Kazze",
      category: "Tienda Online",
      description: "E-commerce con integración de envíos y pagos. Panel administrativo de productos, stock y ventas.",
      image: kazze,
      image2: kazze2,
      tags: ["E-commerce", "Diseño", "Pasarela de pagos", "Envíos"],
      demoUrl: "https://kazzeshop.com.ar/",
      repoUrl: ""
    },
    {
      id: 3,
      title: "Fine & Flow",
      category: "Idiomas In-Company",
      description: "Plataforma de estudiantes y docentes, con módulos de clases, encuestas, actividades, docentes y panel administrativo para coordinadores",
      image: fyf1,
      image2: fyf2,
      tags: ["App Web", "Diseño"],
      demoUrl: "https://www.fineandflow.com/",
      repoUrl: ""
    }
  ];