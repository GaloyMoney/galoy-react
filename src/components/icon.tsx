const SendIcon = ({ fill = "#ed4b85" }: { fill?: string }) => (
  <svg
    width="58"
    height="58"
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M55.569 29c1.342 0 2.442 1.09 2.33 2.429A29 29 0 1 1 28.898 0c1.342-.005 2.34 1.179 2.233 2.517-.108 1.339-1.282 2.323-2.625 2.35a24.137 24.137 0 1 0 24.508 26.56C53.15 30.091 54.225 29 55.569 29z"
      fill={fill}
    />
    <g clipPath="url(#e21ubekeva)" fill={fill} stroke={fill} strokeWidth=".5">
      <path d="M30.163 14.236h-2.325v3.97h2.325v-3.97zM30.163 39.862h-2.325v3.971h2.325v-3.97zM37.287 24.017v-2.324H20.715v2.324h16.572zM37.287 30.156v-2.324H20.715v2.324h16.572zM37.287 36.12v-2.323H20.715v2.324h16.572z" />
    </g>
    <g clipPath="url(#3gzwouqxvb)">
      <path
        d="m42.972 1.628-.038.004V2.68c0 .72.66 1.379 1.38 1.379h7.054L40.066 15.326a1.277 1.277 0 0 0 0 1.821l.783.779c.51.51 1.293.507 1.803-.002L53.95 6.578v7.139c0 .72.676 1.358 1.397 1.358h1.107c.72 0 1.23-.638 1.23-1.358V1.577c0-.349-.099-.648-.347-.895a1.183 1.183 0 0 0-.887-.357H44.314c-.72 0-1.342.583-1.342 1.303z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="e21ubekeva">
        <path fill="#fff" transform="translate(14 14)" d="M0 0h30v30H0z" />
      </clipPath>
      <clipPath id="3gzwouqxvb">
        <path fill="#fff" transform="rotate(-90 29 -10.684)" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)

const ReceiveIcon = ({ fill = "#28bf89" }: { fill?: string }) => (
  <svg
    width="58"
    height="58"
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M55.569 29c1.342 0 2.442 1.09 2.33 2.429A29 29 0 1 1 28.898 0c1.342-.005 2.34 1.179 2.233 2.517-.108 1.339-1.282 2.323-2.625 2.35a24.137 24.137 0 1 0 24.508 26.56C53.15 30.091 54.225 29 55.569 29z"
      fill={fill}
    />
    <g clipPath="url(#m0urlq4ysa)" fill={fill} stroke={fill} strokeWidth=".5">
      <path d="M30.408 14.481h-2.324v3.971h2.324v-3.97zM30.408 40.108h-2.324v3.971h2.324v-3.97zM37.532 24.263V21.94H20.961v2.324h16.571zM37.532 30.401v-2.324H20.961v2.324h16.571zM37.532 36.367v-2.325H20.961v2.325h16.571z" />
    </g>
    <g clipPath="url(#ebebktty6b)">
      <path
        d="m54.712 16.688.038-.004v-1.048c0-.721-.66-1.379-1.38-1.379h-7.054L57.619 2.99a1.277 1.277 0 0 0 0-1.821L56.836.39a1.255 1.255 0 0 0-1.804.002L43.734 11.737V4.6c0-.72-.676-1.358-1.397-1.358H41.23c-.72 0-1.23.638-1.23 1.358v12.14c0 .348.099.648.347.895.248.25.538.357.887.357H53.37c.72 0 1.342-.583 1.342-1.303z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="m0urlq4ysa">
        <path fill="#fff" transform="translate(14.246 14.246)" d="M0 0h30v30H0z" />
      </clipPath>
      <clipPath id="ebebktty6b">
        <path fill="#fff" transform="rotate(90 29 29)" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)

const faMap = {
  close: "times",
  colors: "palette",
  email: "at",
  home: "home",
  invite: "plus",
  language: "language",
  list: "list",
  lock: "lock",
  login: "sign-in-alt",
  logout: "sign-out-alt",
  menu: "bars",
  people: "user-friends",
  person: "user-alt",
  history: "clock-rotate-left",
  bitcoin: "bitcoin-sign",
  qrcode: "qrcode",
  settings: "cog",
  submit: "arrow-alt-circle-right",
} as const

type faKey = keyof typeof faMap

export type IconName = faKey | "send" | "receive" | "send-pending" | "receive-pending"

type Props = {
  name: IconName
}

export const Icon = ({ name }: Props) => {
  switch (name) {
    case "send":
      return <SendIcon />
    case "receive":
      return <ReceiveIcon />
    case "send-pending":
      return <SendIcon fill="#808080" />
    case "receive-pending":
      return <ReceiveIcon fill="#808080" />
    default:
      return <i aria-hidden className={`fa-solid fa-${faMap[name as faKey]}`} />
  }
}
