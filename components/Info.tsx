type Props = {
}

export default function Info({ }: Props) {
  const data = [
      {title: "Minimal Deposit",value: "💲IDR 10,000"},
      {title: "Minimal Withdraw",value: "💲IDR 50,000"},
      {title: "Proses Transaksi",value: "✅ ± 3 Menit"},
      {title: "Metode Deposit",value: "🏧  Transfer Bank, E-Wallet & Pulsa"},
      {title: "Slot Tergacor",value: "🎮 Starlight, Gates of Olympus, Bonanza"},
  ]
  return (
   <div className='mt'>
      <table className='w-full tbl'>
        <thead>
          <tr className="thead">
            <th colSpan={2}>Server Info</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
              return (
              <tr key={index}>
                  <td className='px py title'>{item.title}</td>
                  <td className='px py'>{item.value}</td>
              </tr>)
          })}
        </tbody>
      </table>
      <style jsx global>{`
      .tbl,.tbl th,.tbl td {
          border: 2px solid #fff;
          color: #fff;
          border-collapse: collapse;
          }
      .thead{
        text-align:center;
        font-size: 18px;
        font-weight: bold;
      }
      .thead th {
        padding: 12px;
        color: #fff;
        background: radial-gradient(circle 500px at 46.5%54.2%,#2464c5 0,#03A9F4 96%)
      }
      .tbl .title{
          font-weight: bold
      }
      .tbl td{
          padding: 10px;
          background: rgba(36,100,197,0.3)
      }
      `}</style>
    </div>
  )
}
