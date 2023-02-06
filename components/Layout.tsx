type LayoutProps = {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="scroll">
      {children}
      <style jsx global>{`
        .scroll{
          width: 100vw;
          height: 100vh;
          overflow-y: scroll;
          overflow-x:hidden;
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
