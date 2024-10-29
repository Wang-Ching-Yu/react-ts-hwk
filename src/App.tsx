import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div id="user">
      <div id="basic">
        <h1>
          王敬瑜的自我介紹！
        </h1>
        <table>
          <tr>
            <th>學校</th>
            <th>系級</th>
            <th>班級</th>
            <th>學號</th>
          </tr>
          <tr>
            <td>淡江大學</td>
            <td>國企系</td>
            <td>經管四</td>
            <td>410550163</td>
          </tr>
        </table>
      </div>
      <div id="all">
        <h2>
          關於我：
        </h2>

        <div className="infor">
          <div className="ttl">
            <strong>
              我的個人資料：
            </strong>
          </div>
          <div className="content">
            <p>
              <br>年齡：21歲</br>
              <br>來自：高雄市左營區</br>
              <br>最高學歷：鳳山高中畢業</br>
            </p>
            <div className="other">
              <div className="med">
                <span>
                  興趣愛好：
                </span>
              </div>
              <div className="thr">
                <ul>
                  <li>旅行</li>
                  <li>看電影</li>
                  <li>甜點烹飪</li>
                </ul>
              </div>
              <div className="med">
                <span>
                  個人特點或專長：
                </span>
              </div>
              <div className="thr">
                <ul>
                  <li>妝容設計</li>
                  <li>活動策劃與安排</li>
                  <li>鋼琴、長笛與中國笛演奏</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ttl">
            <strong>
              工作/學習經歷：
            </strong>
          </div>
          <div className="ex">
            <ol>
              <li>
                工作經歷：
                <ul>
                  <li>職位：外場工讀生</li>
                  <li>公司：樂口福</li>
                  <li>工作時間：2023/03-2023/10</li>
                </ul>
              </li>
              <li>
                學習經歷：
                <ul>
                  <li>學習內容：韓文</li>
                  <li>目前進度：基礎語法</li>
                  <li>學習時間：2024/02-至今</li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="ttl">
            <strong>
              聯絡方式：
            </strong>
          </div>
          <div className="contact">
            <div className="text">
              <strong>
                email:
              </strong>
              <div className="email">
                <p>410550163@gms.tku.edu.tw</p>
                <p>queeny2003810@gmail.com</p>
              </div>
              <strong>
                phone:
              </strong>
              <p>0979100810</p>
            </div>
            <a href="https://www.instagram.com/w.cy_810/">
              社群軟體帳號連結
            </a>
            <div className="pic">
              <img src="w.cy_810_qr.png" alt="社群軟體的QRcode～" style={{ width: "20%" }} />
            </div>
            <em>
              也可以用以上的QRcode搜尋
            </em>
          </div>

          <div className="end">
            <strong>
              感謝你看完我的自我介紹！！
            </strong>
            <p>
              有任何訊息歡迎留在下面的訊息欄中！
            </p>
          </div>

          <div className="mes">
            <form action="/submit" method="post"></form>
            <label htmlFor="name">訊息:</label>
            <input type="text" id="name" name="name" />
            <input type="submit" value="提交" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
