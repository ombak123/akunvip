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
        .tbl .title{
            font-weight: bold
        }
        .tbl td{
            background: #3f51b5
        }
        `}</style>
      </div>
    )
  }
  