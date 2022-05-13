const LockIcon = ({ fill = "currentColor" }: { fill?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.7336 7.83333V9.02C18.4758 9.34392 19.1075 9.8771 19.5515 10.5543C19.9955 11.2316 20.2325 12.0235 20.2336 12.8333V17.8333C20.2322 18.938 19.7928 19.997 19.0117 20.7782C18.2306 21.5593 17.1716 21.9987 16.0669 22H7.73356C6.6289 21.9987 5.56986 21.5593 4.78875 20.7782C4.00763 19.997 3.56822 18.938 3.56689 17.8333V12.8333C3.56796 12.0235 3.80498 11.2316 4.24898 10.5543C4.69297 9.8771 5.3247 9.34392 6.0669 9.02V7.83333C6.0669 6.28624 6.68148 4.80251 7.77544 3.70854C8.8694 2.61458 10.3531 2 11.9002 2C13.4473 2 14.9311 2.61458 16.025 3.70854C17.119 4.80251 17.7336 6.28624 17.7336 7.83333ZM8.95395 4.88705C8.17255 5.66846 7.73356 6.72826 7.73356 7.83333V8.66667H16.0669V7.83333C16.0669 6.72826 15.6279 5.66846 14.8465 4.88705C14.0651 4.10565 13.0053 3.66667 11.9002 3.66667C10.7952 3.66667 9.73535 4.10565 8.95395 4.88705ZM17.8347 19.6011C18.3035 19.1323 18.5669 18.4964 18.5669 17.8333V12.8333C18.5669 12.1703 18.3035 11.5344 17.8347 11.0656C17.3658 10.5967 16.7299 10.3333 16.0669 10.3333H7.73356C7.07052 10.3333 6.43464 10.5967 5.9658 11.0656C5.49695 11.5344 5.23356 12.1703 5.23356 12.8333V17.8333C5.23356 18.4964 5.49695 19.1323 5.9658 19.6011C6.43464 20.0699 7.07052 20.3333 7.73356 20.3333H16.0669C16.7299 20.3333 17.3658 20.0699 17.8347 19.6011ZM11.3109 13.9108C11.4671 13.7545 11.6791 13.6667 11.9001 13.6667C12.1211 13.6667 12.3331 13.7545 12.4894 13.9108C12.6457 14.0671 12.7334 14.279 12.7334 14.5V16.1667C12.7334 16.3877 12.6457 16.5997 12.4894 16.7559C12.3331 16.9122 12.1211 17 11.9001 17C11.6791 17 11.4671 16.9122 11.3109 16.7559C11.1546 16.5997 11.0668 16.3877 11.0668 16.1667V14.5C11.0668 14.279 11.1546 14.0671 11.3109 13.9108Z"
      fill={fill}
    />
  </svg>
)

export default LockIcon