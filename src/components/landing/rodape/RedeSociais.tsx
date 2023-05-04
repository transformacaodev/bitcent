import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandYoutube />} url="https://www.youtube.com/@cod3r" />
            <RedeSocial icone={<IconBrandInstagram />} url="https://www.instagram.com/cod3rcursos" />
            <RedeSocial icone={<IconBrandFacebook />} url="https://www.facebook.com/cod3rcursos/" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/cod3rcursos" />
        </div>
    )
}