<div align="center">

# CRYPTO TRACKER ๐

<img src="https://user-images.githubusercontent.com/86703459/187052944-d372934a-cbe2-4c68-8550-32ec4f1d52fe.gif" width="400" height="400" />
<img src="https://user-images.githubusercontent.com/86703459/187052946-ed1df785-6378-4574-a5ab-b28c24b027b8.gif" width="400" height="400" />

<br /><br />

# USE STACK ๐ง

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactHook-EC5990?style=flat-square&logo=React&logoColor=white"/>

<br /><br />

# ํ๋ก์ ํธ ์๊ฐ

TypeScript ์ React , Recoil ์ ํ์ฉํ ๊ฐ๋จํ ์ฝ์ธ์ฌ์ดํธ์ด๋ฉฐ API๋ฅผ ํตํด ์ค์๊ฐ ์ฐจํธ, ๊ฐ๊ฒฉ, 1์๊ฐ ์  ์์ธํํฉ ๋ฑ์ ์ถ๋ ฅํด์ฃผ์๋ค.<br />
์ข์ธก ์๋จ์ ๋ฒ๊ฐ ์์ด์ฝ์ ๋๋ฅด๋ฉด ๋คํฌ๋ชจ๋์ ๋ผ์ดํธ๋ชจ๋๋ฅผ ์ค์  ํ  ์ ์๋ค.

<br /><br />

# ๋ฐฐ์ด์  ๋ฐ ๋๋์ 

TypeScirpt๋ฅผ ์ฒ์ ์ฌ์ฉํด๋ดค๋๋ฐ JavaScript์ ๋ค๋ฅด๊ฒ Type์ ์๊ฒฉํ ์ ์ด ๋ง์์ ๋ค์๋ค.<br />
์์ง๊น์ง๋ ๊ถ๊ธ์ฆ์ ํด๊ฒฐํ์ง ๋ชปํ ์ ์ 'strickNullChecks์ ์ค์ ์ ๋๋ฉด ์๊ธฐ๋ ๋ฌธ์ ๊ฐ ์์๊น?' ์ธ๋ฐ<br />
ํ๋ก์ ํธ ๊ฐ๋ฐ ๋น์ ์ฐจํธ์ 1์๊ฐ ์  ๊ฐ๊ฒฉ์ ์ถ๋ ฅํด์ฃผ๊ธฐ ์ํด 

```c
interface PriceData {
  percent_change_1h: number;
}
```

์ธํฐํ์ด์ค์ number ์ ํ ๋นํด์ฃผ๊ณ  ๊ฐ์ ธ๋ค ์ฐ๋ ๊ฐ์ฒด๊ฐ 'undefined'์ธ ๊ฒ ๊ฐ์ต๋๋ค. ๋ผ๋ ์๋ฌ๊ฐ ์ถ๋ ฅ์ด ๋์๋ค.<br />
์ฌ๋ฌ ๊ณ ๋ฏผ ๋์ strickNullChecks="false" ๋ฅผ ์จ์ค์ ํด๊ฒฐ์ ํ์ง๋ง <br />
type ์ ์๊ฒฉํ TypeScript๋ฅผ ์ฐ๋ฉด์ null ๊ฒ์ฌ๋ฅผ ์๊ฒฉํ๊ฒ ํ์ง ์๋๊ฒ
๊ณผ์ฐ TypeScript๋ฅผ ์ฌ์ฉํ๋ ์๋ฏธ๊ฐ ์์๊น? ๋ผ๋ ์๊ฐ์ด ๋ค์๊ณ  ์ด ๋ถ๋ถ์ ๋ ๊ณ ๋ฏผ ํ ๊ณ ์ณ๋ณผ ์๊ฐ์ด๋ค.<br />

๊ทธ ์ด์ธ์๋ Router๋ฅผ ์ฌ์ฉํ๋ฉด์ ํฐ๋ฌด๋ ์๊ฒ๋ <Link>๋ฅผ <Router> ๋ฐ๊นฅ์ ์จ์ฃผ๋ฉด์ ์๊ฒผ๋ ์ค๋ฅ ๋๋ฌธ์ ๋ช์๊ฐ์ ์ฉ์ฉ ๋งจ ๊ธฐ์ต๋ ์๊ณ <br />
์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ์ ์๋ค๊ณ  ์๊ฐํ์ง๋ง useQuery๋ฅผ ์ฌ์ฉํ๋ฉด์ ๋๋ฒ์งธ ์ธ์์ ํจ์์ ์คํ๊ฐ์ด ๋ค์ด๊ฐ๋ฉด ์๋๋๊ฑธ ๊ณต๋ถํด๋๊ณ  ()๋ฅผ ๋ถ์ฌ๋๊ณ  ์ ์๋์ง๋ผ๋
์ด์ด์๋ ์๊ฐ์ ํ๋ฉด์ ์ฝ๋ฐฑํจ์์ ๋ํ ๊ฐ๋๋ ๋ค์ ์ตํ๋ ์ข์ ์๊ฐ์ด ๋์๋ค.


</div>

## page
https://leedhhhhh.github.io/crypto_tracker


