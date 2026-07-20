import Image from "next/image";

export default async function IsrCachedDog() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random", {next: {revalidate: 10}});
    const data = await res.json();

    return (
        // inline tag는 {{ }}로 감싸야함
        <div style={{border:"2px solid #Ef4444", borderRadius:"12px", padding:"20px", width:"360px", backgroundColor:"#FEF2F2"}}>
            <h2 style={{color : "#08aaB2", margin: "0 0 4px 0"}}>
                ⏱️ revalidate: 10
            </h2>
            <p style={{color: "#666", fontSize: "14px", margin: "0"}}>
                10초가 경과한 후에 API를 호출합니다.<br />
            </p>
            <Image src={data.message} alt="cached dog" loading="eager" width={320} height={240} style={{borderRadius:"8px", objectFit:"cover"}} />
            <p style={{fontSize:"12px", color:"#666", wordBreak:"break-all"}}>
                {data.message}
            </p>
        </div>
    )
}