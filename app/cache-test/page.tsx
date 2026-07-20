import CachedDog from "@/components/CachedDog";
import NoCachedDog from "@/components/NoCachedDog"
import IsrCachedDog from "@/components/IsrCachedDog";

export default function Home() {
    return (
        <main style={{padding:"40px", fontFamily:"sans-serif"}}>
            <h1>👀 Next.js Data Caching 비교 실험</h1>
            <p style={{color:"#666", marginBottom:"32px"}}>
                새로고침(F5) 를 여러번 눌러보세요! 차이가 보입니다.
            </p>

            <div style={{display:"flex", gap:"24px", flexWrap:"wrap"}}>
                <CachedDog />
                <NoCachedDog />
                <IsrCachedDog />
            </div>
        </main>
    )
}