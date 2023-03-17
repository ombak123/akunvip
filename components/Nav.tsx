type Props = {
}

export default function Nav({}: Props) {
  return (
      <>
          <div className='nav'>
              <div className='nav-logo'>
                <a href="https://123ombak.net/account/register/akunprovip">
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
                <a href="https://123ombak.net/account/register/akunprovip">
                    <div className='btn daftar'>
                        Daftar Slot
                    </div>
                </a>
              </div>
              <div className='nav-item'>
                <a href="https://123ombak.net/account/register/akunprovip">
                    <div className='btn login'>
                        Masuk
                    </div>
                </a>
              </div>
          </div>
          {/* <div className="header-root">
            <a href="https://123ombak.net/account/register/akunprovip">
                <div className='header'>
                    <div className='header-item'>
                        Kamboja Server Slot
                    </div>
                </div>
            </a>
          </div> */}
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
                margin-top: 1rem;
              }
              .header{
                display:flex;
                justify-content: center;
                align-items: center;
                height:96px;
                background: rgba(255,255,255,0.1)
                padding: 0 12px;
                border-radius: 8px;
                border: 1px dashed #03A9F4;
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
                background: linear-gradient(90deg,#000, #2464c5,#000);
              }
              .nav-logo{
                  position: relative;
                  border-bottom: 3px solid #03A9F4;
                  border-top: 3px solid #03A9F4;
                  background: rgba(255,255,255,0.3);
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
                  border: 4px solid;
                  border-radius: 0.25rem;
                  text-align:center;
              }
              .daftar{
                border-color: #2464c5;
                color: #fff;
                font-weight:bold;
                background: #2464c5
              }
              .login:hover{
                background-color: #2464c5
              }
              .login{
                border-color: #2464c5;
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
