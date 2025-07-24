// NotificationListener.jsx
import { useEffect } from "react";
import Pusher from "pusher-js";

export default function NotificationListener({ onNotify }) {
    useEffect(() => {
        // إعداد Pusher مع تمكين التشفير
        const pusher = new Pusher("405af670afeb8f90cc18", {
            cluster: "eu",
            forceTLS: true,
        });

        // الاشتراك في القناة الصحيحة
        const channel = pusher.subscribe("notifications");

        // الاستماع لحدث الإشعار الجديد
        channel.bind("new.notification", function (data) {
            console.log("Received notification:", data);
            if (typeof onNotify === "function") {
                onNotify(data);
            }
        });

        // تنظيف الاشتراك عند إلغاء المكون
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
            pusher.disconnect();
        };
    }, [onNotify]);

    return null;
}
