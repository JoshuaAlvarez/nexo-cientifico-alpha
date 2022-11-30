import { Avatar } from "@mui/material";
import Image from "next/image";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="space-y-2 min-w-max max-w-lg">
      {/* Top */}
      <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        <div className="relative w-full h-14">
          <Image src="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" layout="fill" priority alt="" />
        </div>
        <Avatar
          onClick={signOut}
          src={session?.user?.image}
          className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
        />
        <div className="mt-5 py-4 space-x-0.5">
          <h4 className="hover:underline underline-offset-1 cursor-pointer">
            {session?.user?.name}
          </h4>
          <p className="text-black/60 dark:text-white/80 text-sm">
            {session?.user?.email}
          </p>
        </div>

        <div className="hidden md:inline text-left dark:text-white/80 text-sm">
          <div className="font-medium sidebarButton space-y-0.5">
            <div className="flex justify-between space-x-2">
              <h4>¿Quién ha visto tu perfil?</h4>
              <span className="text-blue-500">321</span>
            </div>
            <div className="flex justify-between space-x-2">
              <h4>Views of your post</h4>
              <span className="text-blue-500">1,892</span>
            </div>
          </div>

          <div className="sidebarButton">
            <h4 className="leading-4 text-xs">
              Acceso a herramientas y recursos
            </h4>
            <h4 className="dark:text-white font-medium">
              <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
              Complementa tu perfil
            </h4>
          </div>

          <div className="sidebarButton flex items-center space-x-1.5">
            <BookmarkOutlinedIcon className="!-ml-1" />
            <h4 className="dark:text-white font-medium">Mis eventos</h4>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="hidden md:flex bg-white dark:bg-[#1D2226] text-black/70 dark:text-white/75 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 border border-gray-300 dark:border-none">
        <p className="sidebarLink">Grupos</p>
        <div className="flex items-center justify-between">
          <p className="sidebarLink">Eventos</p>
          <AddRoundedIcon className="!h-5" />
        </div>
        <p className="sidebarLink">Temas que te interesan</p>
        <div className="sidebarButton text-center">
          <h4 className="dark:text-white font-medium text-sm">Explora mas temas</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;