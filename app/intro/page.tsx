// 가급적이면 tailwindcss 를 사용하지만 추가적으로 처리하기 위한 css 파일 설정을 위해 처리
import styles from './intro.module.css'

export default function IntroPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>회사 소개 페이지</h1>
            <p className="text-slate-500 mt-2">
                이 컴포넌트의 스타일은 오직 이 안에서만 안전하게 숨쉬고 있습니다.
            </p>
            <p className={styles.text}>module css 의 text css 스타일</p>
        </div>
    );
}