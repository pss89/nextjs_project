import Image from "next/image";

export default async function CachedDog() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random", {cache:"force-cache"});
    const data = await res.json();

    return (
        // inline tag는 {{ }}로 감싸야함
        <div style={{border:"2px solid #0891B2", borderRadius:"12px", padding:"20px", width:"360px", backgroundColor:"#f0f9ff"}}>
            <h2 style={{color : "#0891B2", margin: "0 0 4px 0"}}>
                🔒 force-cache
            </h2>
            <p style={{color: "#666", fontSize: "14px", margin: "0"}}>
                캐시에 저장 된 이미지를 계속 재 사용합니다.
                <br />
                새로고침해도 <strong>같은 강아지</strong>가 나옵니다!
            </p>
            <Image src={data.message} alt="cached dog" loading="eager" width={320} height={240} style={{borderRadius:"8px", objectFit:"cover"}} />
            <p style={{fontSize:"12px", color:"#999", wordBreak:"break-all"}}>
                {data.message}
            </p>
        </div>
    )
}