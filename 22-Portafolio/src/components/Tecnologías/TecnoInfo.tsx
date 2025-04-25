import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

const TecnoInfo =  ({ className,}: {className?: string;}) => {
  
  interface Item {
    name: string;
    description?: string;
    icon: string | React.ReactNode;
    color: string;
    time?: string;
  }
   
  let notifications = [
    {
      name: "React",
      icon: "https://skillicons.dev/icons?i=react",
      color: "#333",
    },
    {
      name: "Javascript",
      icon: "https://skillicons.dev/icons?i=js",
      color: "#333",
    },
    {
      name: "Node JS",
      icon: "https://skillicons.dev/icons?i=nodejs",
      color: "#333",
    },
    {
      name: "HTML5",
      icon: "https://skillicons.dev/icons?i=html",
      color: "#333",
    },
    {
      name: "CSS3",
      icon: "https://skillicons.dev/icons?i=css",
      color: "#333",
    },
  ];
  let notifications2 = [
    {
      name: "Bootstrap",
      icon: "https://skillicons.dev/icons?i=bootstrap",
      color: "#333",
    },
    {
      name: "MySQL",
      icon: "https://skillicons.dev/icons?i=mysql",
      color: "#333",
    },
    {
      name: "VsCode",
      icon: "https://skillicons.dev/icons?i=vscode",
      color: "#333",
    },
    {
      name: "Wordpress",
      icon: "https://skillicons.dev/icons?i=wordpress",
      color: "#333",
    },
    {
      name: "Github",
      icon: "https://skillicons.dev/icons?i=github",
      color: "#333",
    },

  ];
   
  notifications = Array.from({ length: 10 }, () => notifications).flat();
  notifications2 = Array.from({ length: 10 }, () => notifications2).flat();
  
  const Notification = ({ name, icon, color }: Item) => {
    return (
      <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[453px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // dark styles
        "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }} 
        >
          <span className="text-lg">
            {typeof icon === "string" ? <img src={icon} alt={name} /> : icon}
          </span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white pr-[5rem]">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
        </div>
      </div>
    </figure>
    );
  };

    
   
  return (
    <>
    <div className="marquee__item">
        <div
          className={cn(
            "marquee__component relative flex h-[453px] w-full flex-col overflow-hidden p-2",
            className,
          )}
        >
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList> 
          


          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>


        <div
        className={cn(
          "relative flex h-[453px] w-full flex-col overflow-hidden p-2",
          className,
        )}
      >
        <AnimatedList>
          {notifications2.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
        


        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      </div>
    </div>
  </>
  );
};

export default TecnoInfo;



