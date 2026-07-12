"use client";

import { useState } from "react";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    return (

        <button onClick={() => setLikes(likes + 1)}
            className="bg-rose-50 text-rose-800 px-4 py-2 rounded-full text-sm font-:semibold active:scale-95 transition-all hover:bg-rose-100"
            > ❤️ 응원하기 {likes}
        </button>
    );
}