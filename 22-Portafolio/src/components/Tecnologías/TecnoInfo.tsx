import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface Notification {
  name: string;
  description: string;
  time: string;
  icon: string;
  color: string;
}

const TecnoInfo = () => {
  const [displayedNotifications, setDisplayedNotifications] = useState<Notification[]>([]);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    const notifications: Notification[] = [
      {
        name: "Payment received",
        description: "Magic UI",
        time: "15m ago",
        icon: "💸",
        color: "#00C9A7",
      },
      {
        name: "Montse",
        description: "Magic UI",
        time: "10m ago",
        icon: "👤",
        color: "#FFB800",
      },
      {
        name: "Jorge",
        description: "Magic UI",
        time: "5m ago",
        icon: "💬",
        color: "#FF3D71",
      },
      {
        name: "Moon",
        description: "Magic UI",
        time: "10m ago",
        icon: "👤",
        color: "#FFB800",
      },
      {
        name: "Jordi",
        description: "Magic UI",
        time: "5m ago",
        icon: "💬",
        color: "#FF3D71",
      },
      {
        name: "Gianni",
        description: "Magic UI",
        time: "10m ago",
        icon: "👤",
        color: "#FFB800",
      },
      
    ];

    const intervalId = setInterval(() => {
      setDisplayedNotifications((prevNotifications) => {
        const nextNotification = notifications[notificationIndex];
        const updatedNotifications = [...prevNotifications, nextNotification];
        return updatedNotifications.slice(-4);
      });
      setNotificationIndex((prevIndex) => (prevIndex + 1) % notifications.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [notificationIndex]);

  const renderNotification = (item: Notification) => (
    <figure
      key={item.name} // Usamos el nombre como clave ya que los datos son estáticos
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: item.color + "1A", // Añadimos un poco de transparencia al color de fondo
          }}
        >
          <span className="text-lg">{item.icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{item.name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{item.time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {item.description}
          </p>
        </div>
      </div>
    </figure>
  );

  return (
    <>
      <AnimatedList >
        {displayedNotifications.map((item) => renderNotification(item))}
      </AnimatedList>
    </>
  );
};

export default TecnoInfo;