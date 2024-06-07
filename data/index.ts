
export const name = "Selam"

export const navItems = [ 
    {name:"Home", link:"/"},
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: " lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "ml-[1.5rem] mb-[1rem] justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1 ",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center relative bottom-[4rem]",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Modern Blogify",
      des: "Sleek and intuitive web application that simplifies the process of creating and managing your own blog. With Blogify",
      img: "/blog.jpeg",
      iconLists: ["/re.svg", "/tail.svg", "/mysql.svg","/node.png", "/exp.png"],
      link: "https://github.com/selamabay/blogify.git",
    },
    {
      id: 2,
      title: "E-learning",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/learn.png",
      iconLists: ["/vue.png", "/tail.svg", "/node.png", "/mon.png", "/c.svg"],
      link: "https://github.com/Amsalegebrehana/ESSTI.git",
    },
    {
      id: 3,
      title: "Smart Brain",
      des: "Effortlessly detect and recognize faces in any image you upload, using advanced AI technology for quick and accurate results.",
      img: "/sbrain.png",
      iconLists: ["/re.svg", "/tail.svg", "/node.png","/exp.png", "/post.png"],
      link: "https://github.com/selamabay/Smart_Brain.git",
    },
    {
      id: 4,
      title: "Techopia Book Store",
      des: "Browse books from a vast collection, enjoy personalized recommendations, and explore literary treasures...",
      img: "/book.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/node.png", "/mysql.svg"],
      link: "https://github.com/selamabay/DLM.git",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Selam was an absolute pleasure. Selam professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Selam's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Selam is the ideal partner.",
      name: "Ahmed Mohammedseid",
      title: "Director of ZAHA",
      img: "/ahmed.jpg",
    },
    {
      quote:
        "Working with Selam was an outstanding experience. Selam expertise, responsiveness, and commitment to excellence shone through every stage of our project. Selam's passion for development and attention to detail made a significant impact. For anyone looking to enhance their digital presence and achieve remarkable results, Selam is the perfect collaborator.",
      name: "Nebyu Daniel",
      title: "CEO of FNA Solution",
      img: "/nebyu.jpeg",
    },
    {
      quote:
        "Working with Selam was fantastic. Selam professionalism, reliability, and passion for development truly elevated our project. Highly recommend Selam for anyone looking to enhance their website and brand.",
      name: "Fetih Girma",
      title: "Lead Director at DanEnergy",
      img: "/fetih.jpeg",
    },
   
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Backend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using MERN Stack.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web App Dev - Techopia",
      desc: "Designed and developed Web app for both local & international clients using latest technologies.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a web app for a client, from initial concept to deployment.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      link:"https://github.com/selamabay",
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
      link:"https://twitter.com/alazaradane369"
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/alazar-adane-827049219/"
    },
  ];