type Props = {
}

export default function Nav({}: Props) {
  const handleLink= ()=>{
    document.getElementById("load").classList.add("show")
    console.log("test")
  }
  return (
      <>
          <div className='nav'>
              <div className='nav-logo'>
                <a href="https://ombak123.org/account/register">
                    <div className="mr-2">
                        <amp-img
                            alt="logo"
                            fallback=""
                            width="60"
                            height="60"
                            src="/img/korea1.png"
                            ></amp-img>
                    </div>
                    <amp-img
                        alt="logo"
                        fallback=""
                        width="60"
                        height="60"
                        src="/img/korea2.png"
                        ></amp-img>
                </a>
              </div>
              <div className='nav-item'>
                <a href="https://ombak123.org/account/register">
                    <div className='btn daftar'>
                        Daftar Slot
                    </div>
                </a>
              </div>
              <div className='nav-item'>
                <a href="https://ombak123.org/account/register">
                    <div className='btn login'>
                        Masuk
                    </div>
                </a>
              </div>
          </div>
          <div className="header-root">
            <a href="https://ombak123.org/account/register">
                <div className='header'>
                    <div className='header-item'>
                        Korea Server Slot
                    </div>
                </div>
            </a>
          </div>
          <style jsx>{`
              @media (max-width:767px){
                  .nav-logo{
                  width:100%;
                  }
                  .nav-item{
                  width: 50%;
                  padding: 12px;
                  }
              }
              @media (min-width:768px){
                  .nav-logo,.nav-item{
                  width:33.333333%;
                  }
                  .nav-item{
                  padding: 0 12px;
                  }
              }
              .header-root{
                display:block;
              }
              .header{
                display:flex;
                justify-content: center;
                align-items: center;
                height:96px;
                padding: 0 12px;
                border: 1px dashed #f59e0b;
                margin-top: 6px;
              }
              .header-item{
                width:100%;
                padding: 6px 12px;
                border: 2px solid;
                border-radius: 0.25rem;
                text-align:center;
                color: #fff;
                font-weight:bold;
                background: linear-gradient(90deg,#000, #f59e0b,#000);
              }
              .nav-logo{
                  border-bottom: 3px solid #f59e0b;
                  border-top: 3px solid #f59e0b;
                  background: rgba(255,255,255);
                  height:80px;
                  border-radius: 0.5rem;
              }
              .nav-logo a {
                padding:10px 12px;
                display:flex;
                justify-content: center;
              }
              .nav{
                  margin-top:0.75rem;
                  display:flex;
                  align-items:center;
                  flex-wrap:wrap;
              }
              .btn{
                  padding: 12px;
                  border: 2px solid;
                  border-radius: 0.25rem;
                  text-align:center;
              }
              .daftar{
                border-color: #f59e0b;
                color: #fff;
                font-weight:bold;
                background: #f59e0b
              }
              .login:hover{
                background-color: #f59e0b
              }
              .login{
                border-color: #f59e0b;
                color: #fff;
                font-weight:bold;
                transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 500ms;
              }
              `}</style>
      </>
  )
}
