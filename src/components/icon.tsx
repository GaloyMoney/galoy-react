import React from "react"

import AddIcon from "./icons/add"
import ArrowRightCircleIcon from "./icons/arrow-right-circle"
import AtIcon from "./icons/at"
import BitcoinIcon from "./icons/bitcoin"
import ClockIcon from "./icons/clock"
import CloseCircleIcon from "./icons/close-circle"
import CogIcon from "./icons/cog"
import CopyIcon from "./icons/copy"
import EyeIcon from "./icons/eye"
import HomeIcon from "./icons/home"
import KeyIcon from "./icons/key"
import ListIcon from "./icons/list"
import LockIcon from "./icons/lock"
import LoginIcon from "./icons/login"
import LogoutIcon from "./icons/logout"
import MenuIcon from "./icons/menu"
import OpacityIcon from "./icons/opacity"
import PeopleIcon from "./icons/people"
import PersonIcon from "./icons/person"
import QRCodeIcon from "./icons/qr-code"
import ReceiveIcon from "./icons/receive"
import SatIcon from "./icons/sat"
import SendIcon from "./icons/send"
import SpinnerIcon from "./icons/spinner"
import WorldIcon from "./icons/world"

export type IconName =
  | "add"
  | "at"
  | "bitcoin"
  | "clock"
  | "close"
  | "copy"
  | "eye"
  | "home"
  | "key"
  | "list"
  | "lock"
  | "login"
  | "logout"
  | "menu"
  | "opacity"
  | "people"
  | "person"
  | "qrcode"
  | "receive"
  | "sat"
  | "send"
  | "settings"
  | "spinner"
  | "submit"
  | "world"

export const Icon: React.FC<{ name: IconName }> = ({ name }) => {
  switch (name) {
    case "add":
      return <AddIcon />
    case "at":
      return <AtIcon />
    case "bitcoin":
      return <BitcoinIcon />
    case "clock":
      return <ClockIcon />
    case "close":
      return <CloseCircleIcon />
    case "copy":
      return <CopyIcon />
    case "eye":
      return <EyeIcon />
    case "home":
      return <HomeIcon />
    case "key":
      return <KeyIcon />
    case "list":
      return <ListIcon />
    case "lock":
      return <LockIcon />
    case "login":
      return <LoginIcon />
    case "logout":
      return <LogoutIcon />
    case "menu":
      return <MenuIcon />
    case "opacity":
      return <OpacityIcon />
    case "people":
      return <PeopleIcon />
    case "person":
      return <PersonIcon />
    case "qrcode":
      return <QRCodeIcon />
    case "receive":
      return <ReceiveIcon />
    case "sat":
      return <SatIcon />
    case "send":
      return <SendIcon />
    case "settings":
      return <CogIcon />
    case "spinner":
      return <SpinnerIcon />
    case "submit":
      return <ArrowRightCircleIcon />
    case "world":
      return <WorldIcon />
  }
}
