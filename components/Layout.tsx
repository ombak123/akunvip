import Head from "next/head"

type LayoutProps = {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="scroll">
        <Head>
        <title>Mainkan Game Slot Online Seru di Akun Pro VIP Korea - Daftar Sekarang!</title>
        <link
            rel="canonical"
            href="https://www.akunprovipkorea.com/"
            key="canonical"
          />
        <meta name="google-site-verification" content="qRupMttlOsgwsaPlmjleKvnFQ0alwymCjKP6mor_UCM" />
        <meta name="description" content="Akun Pro VIP Korea menawarkan berbagai pilihan game slot online yang menarik. Daftar sekarang dan dapatkan akses ke slot terbaik kami, bonus, dan promosi. Bergabunglah sekarang dan rasakan pengalaman bermain game terbaik dengan Akun Pro VIP Korea!" />
        <meta name="keywords" content="Akun Pro VIP Korea, Akun Pro VIP Korea, akunpro, akunproserverindonesia, akunserverindonesia"/>
        <meta name="robots" content="index, follow" />
        <meta name="page-locale" content="id,en"/>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type"/>
        <meta content="true" name="HandheldFriendly"/>
        <meta content="width" name="MobileOptimized"/>
        <meta content="indonesian" name="language"/>
        <meta content='#F6890B' name='theme-color' />
        <meta name="supported-amp-formats" content="websites,stories,ads,email"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="Mainkan Game Slot Online Seru di Akun Pro VIP Korea - Daftar Sekarang!"/>
        <meta name="twitter:description" content="Akun Pro VIP Korea menawarkan berbagai pilihan game slot online yang menarik. Daftar sekarang dan dapatkan akses ke slot terbaik kami, bonus, dan promosi. Bergabunglah sekarang dan rasakan pengalaman bermain game terbaik dengan Akun Pro VIP Korea!"/>
        <meta name="twitter:image:src" content="https://i.ibb.co/WKcVH5v/Whats-App-Image-2022-11-28-at-22-15-44.jpg"/>
        <meta name="twitter:player" content="https://www.youtube.com/"/>
        <meta property="og:title" content="Mainkan Game Slot Online Seru di Akun Pro VIP Korea - Daftar Sekarang!" />
        <meta property="og:description" content="Akun Pro VIP Korea menawarkan berbagai pilihan game slot online yang menarik. Daftar sekarang dan dapatkan akses ke slot terbaik kami, bonus, dan promosi. Bergabunglah sekarang dan rasakan pengalaman bermain game terbaik dengan Akun Pro VIP Korea!" />
        <meta name="og:image" content="https://i.ibb.co/WKcVH5v/Whats-App-Image-2022-11-28-at-22-15-44.jpg"/>
        <meta property="og:image:width" content="640"/>
        <meta property="og:image:height" content="167"/>
        <meta name="og:url" content="https://123ombak.net"/>
        <meta property="og:site_name" content="Mainkan Game Slot Online Seru di Akun Pro VIP Korea - Daftar Sekarang!" />
        <meta name="og:locale" content="ID_id"/>
        <meta name="og:video" content="https://www.youtube.com/"/>
        <meta name="og:type" content="website"/>
        <meta property="og:type" content="video" />
        <meta property="og:video" content="https://www.youtube.com/"/>
        <meta property="og:video:type" content="video/mp4"/>
        <meta property="og:video:width" content="560"/>
        <meta property="og:video:height" content="314"/> 
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="categories" content="Korea,akunproKorea,akunpro, slot Korea, slot online, judi online" />
        <meta name="language" content="ID"/>
        <meta name="rating" content="general"/>
        <meta name="copyright" content="ombak123"/>
        <meta name="author" content="ombak123"/>
        <meta name="distribution" content="global"/>
        <meta name="publisher" content="ombak123"/>
        <meta name="geo.placename" content="DKI Jakarta"/>
        <meta name="geo.country" content="ID"/>
        <meta name="geo.region" content="ID" />
        <meta name="tgn.nation" content="Indonesia"/>
      </Head>
      {children}
      <style jsx global>{`
        .scroll{
          width: 100vw;
          height: 100vh;
          overflow-y: scroll;
          overflow-x:hidden;
          background: rgba(0,0,0,0.5);
        }
        a {
          text-decoration: none;
        }
        body {
          font-family: Roboto, sans-serif;
          display:block;
          color: #fff;
          background-image: url("/img/bg3.jpg");
          background-size: cover;
          background-repeat: no-repeat;
        }
        div{
          box-sizing:border-box;
        }
        .mt{
          margin-top:12px;
        }
        .px{
          padding-left:12px;
          padding-right:12px;
        }
        .py{
          padding-top:6px;
          padding-bottom:6px;
        }
        .w-full{
          width: 100%;
        }
        .h-full{
          height: 100%;
        }
        .bg-white{
          background: #0e0e0e;
        }
        .mr-2{
          margin-right: 24px;
        }
        .center{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .w-half{
          width:50%;
         }
      `}</style>
    </div>
  )
}
