import React from "react";
import thumbnail1 from './img/video-thumbnail.webp';
import thumbnail2 from './img/thumbnail2.webp';
import thumbnail3 from './img/thumbnail3.webp';
import thumbnail4 from './img/thumbnail4.webp';
import thumbnail5 from './img/thumbnail5.webp';
import "./styles.css";

function VideoGrid() {
  return (
    <section className="video-grid">
      <div className="video-card">
        <img src={thumbnail1} alt="Video Thumbnail" />
        <div className="video-info">
          <h4>롤드컵 3일차.. 올해 LCK 경기력 미쳤는데요?</h4>
          <p>티모준위 • 조회수 6.3천회 • 2시간 전</p>
        </div>
      </div>

      <div className="video-card">
        <img src={thumbnail2} alt="Video Thumbnail" />
        <div className="video-info">
          <h4>자숙 및 둘째 공개</h4>
          <p>박나나 • 조회수 10만회 • 10개월 전</p>
        </div>
      </div>

      <div className="video-card">
        <img src={thumbnail3} alt="Video Thumbnail" />
        <div className="video-info">
          <h4>나야, 트런들</h4>
          <p>1vsAll • 조회수 9.7만회 • 6일 전</p>
        </div>
      </div>

      <div className="video-card">
        <img src={thumbnail4} alt="Video Thumbnail" />
        <div className="video-info">
          <h4>아니. 야. 잠깐. 나 덱 이거 안들고 왔는데 [유희왕 마스터듀얼 광암페스]</h4>
          <p>민트초코용 • 조회수 2.4만회 • 1년 전</p>
        </div>
      </div>

      <div className="video-card">
        <img src={thumbnail5} alt="Video Thumbnail" />
        <div className="video-info">
          <h4>멘체스터의 세입자</h4>
          <p>동네축구팬 김오블 • 조회수 1만회 • 6개월 전</p>
        </div>
      </div>

      <div className="video-card">
        <img src={thumbnail5} alt="Video Thumbnail" />
        <div className="video-info">
          <h4>멘체스터의 세입자</h4>
          <p>동네축구팬 김오블 • 조회수 1만회 • 6개월 전</p>
        </div>
      </div>
    </section>
  );
}

export default VideoGrid;
