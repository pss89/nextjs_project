import Image from "next/image";

export default async function CachedDog() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random", {cache:"no-store"});
    const data = await res.json();

    return (
        // inline tag는 {{ }}로 감싸야함
        <div style={{border:"2px solid #Ef4444", borderRadius:"12px", padding:"20px", width:"360px", backgroundColor:"#FEF2F2"}}>
            <h2 style={{color : "#0891B2", margin: "0 0 4px 0"}}>
                🔄 no-store
            </h2>
            <p style={{color: "#666", fontSize: "14px", margin: "0"}}>
                매번 새로 API를 호출합니다.<br />
                새로고침하면 <strong>다른 강아지</strong>가 나옵니다!
            </p>
            <Image src={data.message} alt="cached dog" width={320} height={240} style={{borderRadius:"8px", objectFit:"cover"}} />
            <p style={{fontSize:"12px", color:"#666", wordBreak:"break-all"}}>
                {data.message}
            </p>
        </div>
    )
}