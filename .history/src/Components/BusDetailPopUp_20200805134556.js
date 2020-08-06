import React from 'react';

export default function BusDetailPopUp() {
  return (
    <div className="w-1/3 rounded-md bg-gray-100">
      <div className="mt-4 p-2 w-full bg-gray-300 rounded-md">
        <strong className="pl-8 text-xl text-blue-500">
          Bus No. (473824 EBL - IRQ)
        </strong>
      </div>
      <div className="mt-4 p-2">
        <h3 className="pl-8 text-lg font-semibold">Route way: </h3>
      </div>
      <hr className=" border-b-2 border-gray-200" />
      <div className="mt-4 p-2">
        <h3 className="pl-8 text-lg font-semibold">Informations: </h3>
      </div>
      <div>
        <div className="mt-4 pl-12">
          <svg
            width="150"
            height="50"
            viewBox="0 0 62 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.5 29L59.9997 27.9826" stroke="#385185" />
            <path
              d="M60.9869 13.9959C60.6607 10.6171 60.273 7.22596 60.0022 3.84098C59.8114 1.44073 58.3897 0.000574034 55.9648 0.000574034H55.1463C54.8871 0.177854 54.5802 0.272283 54.2662 0.271372H4.92555C4.60961 0.272371 4.30073 0.177989 4.0393 0.000574034C3.81774 0.000574034 3.59618 0.000574034 3.36846 0.000574034C2.93085 -0.00758307 2.49597 0.0712667 2.08908 0.232545C1.68218 0.393824 1.31137 0.634318 0.998178 0.940069C0.684983 1.24582 0.435641 1.61074 0.264624 2.01364C0.0936068 2.41653 0.00432232 2.84939 0.00195312 3.28708C0.00195312 8.14093 0.00195312 13.003 0.00195312 17.8732H61.3623C61.2454 16.5808 61.11 15.2884 60.9869 13.9959ZM45.1329 8.87536C45.1337 8.90982 45.1276 8.9441 45.115 8.97617C45.1024 9.00825 45.0835 9.03748 45.0594 9.06213C45.0353 9.08679 45.0065 9.10638 44.9748 9.11976C44.943 9.13313 44.9089 9.14001 44.8744 9.14001H4.08854C4.04599 9.14017 4.00405 9.12984 3.96645 9.1099C3.92885 9.08997 3.89675 9.06107 3.87301 9.02576C3.84926 8.99044 3.8346 8.94981 3.83033 8.90747C3.82606 8.86513 3.8323 8.82239 3.84852 8.78305L5.88565 3.74251C5.90426 3.69385 5.93713 3.65195 5.97996 3.6223C6.02279 3.59264 6.07359 3.57662 6.12568 3.57634H44.899C44.9335 3.57633 44.9676 3.58321 44.9994 3.59659C45.0312 3.60996 45.0599 3.62955 45.084 3.65421C45.1081 3.67887 45.127 3.7081 45.1396 3.74017C45.1523 3.77225 45.1583 3.80652 45.1575 3.84098L45.1329 8.87536ZM51.9029 15.6453H50.1611C50.0644 15.6332 49.9753 15.5862 49.9108 15.5131C49.8462 15.44 49.8106 15.3459 49.8106 15.2483C49.8106 15.1508 49.8462 15.0567 49.9108 14.9836C49.9753 14.9105 50.0644 14.8635 50.1611 14.8514H51.8844C51.9812 14.8635 52.0702 14.9105 52.1347 14.9836C52.1993 15.0567 52.2349 15.1508 52.2349 15.2483C52.2349 15.3459 52.1993 15.44 52.1347 15.5131C52.0702 15.5862 51.9812 15.6332 51.8844 15.6453H51.9029ZM56.4941 15.3991L49.7549 9.69391C49.6866 9.63105 49.6334 9.55355 49.5993 9.46722C49.5652 9.38089 49.5511 9.28796 49.558 9.1954L49.4595 4.16101C49.4774 4.02504 49.544 3.90017 49.647 3.80962C49.75 3.71906 49.8824 3.66897 50.0196 3.66866H56.3464C56.674 3.66846 56.9901 3.78982 57.2334 4.00925C57.4767 4.22867 57.6299 4.53056 57.6635 4.85647L58.6543 14.2298C58.681 14.4931 58.6284 14.7583 58.5034 14.9916C58.3784 15.2248 58.1866 15.4155 57.9526 15.5391C57.7187 15.6627 57.4531 15.7136 57.19 15.6854C56.9268 15.6572 56.6781 15.5511 56.4756 15.3807L56.4941 15.3991Z"
              fill="#395185"
            />
            <path
              d="M61.5467 20.341C61.5467 19.6948 61.4666 19.0486 61.4113 18.4023H0.00166429C0.00166429 19.0178 0.00166429 19.6332 0.00166429 20.2487C-0.0251915 21.0759 0.27386 21.8806 0.834436 22.4895C1.39501 23.0985 2.17228 23.4629 2.99891 23.5044C3.10969 23.5044 5.04835 23.5044 8.15022 23.5044C8.1132 23.7282 8.09467 23.9546 8.09483 24.1814C8.09468 25.2785 8.49272 26.3384 9.21504 27.1643C9.93735 27.9901 10.9348 28.5257 12.0222 28.6715C13.1096 28.8174 14.213 28.5637 15.1274 27.9575C16.0419 27.3513 16.7052 26.4338 16.9942 25.3754C17.2634 26.4536 17.9196 27.3952 18.8379 28.0211C19.7562 28.647 20.8725 28.9134 21.9745 28.7698C23.0765 28.6262 24.0872 28.0824 24.8144 27.2421C25.5415 26.4017 25.9344 25.3234 25.9183 24.2122C25.9162 24.0061 25.8997 23.8005 25.869 23.5967H43.994C43.994 24.7981 44.4713 25.9502 45.3207 26.7997C46.1702 27.6492 47.3224 28.1265 48.5237 28.1265C49.7251 28.1265 50.8772 27.6492 51.7267 26.7997C52.5762 25.9502 53.0534 24.7981 53.0534 23.5967C56.3584 23.5967 58.4633 23.5967 58.5925 23.5967C60.5127 23.4244 61.6451 22.2366 61.5467 20.341ZM12.6492 26.7417C12.1462 26.7405 11.6549 26.59 11.2374 26.3095C10.82 26.0289 10.4952 25.6307 10.3041 25.1655C10.113 24.7002 10.0643 24.1887 10.164 23.6957C10.2638 23.2027 10.5076 22.7504 10.8646 22.396C11.2215 22.0417 11.6756 21.8012 12.1693 21.705C12.663 21.6088 13.1741 21.6613 13.638 21.8557C14.1019 22.0502 14.4976 22.3779 14.7752 22.7973C15.0527 23.2168 15.1996 23.7092 15.1971 24.2122C15.1939 24.8853 14.9238 25.5295 14.4461 26.0037C13.9685 26.4779 13.3222 26.7433 12.6492 26.7417ZM21.3886 26.7417C20.8853 26.7417 20.3934 26.5923 19.9751 26.3125C19.5569 26.0326 19.2311 25.6349 19.0391 25.1697C18.8471 24.7046 18.7974 24.1929 18.8965 23.6995C18.9956 23.2061 19.2389 22.7532 19.5956 22.3982C19.9523 22.0432 20.4064 21.8021 20.9003 21.7054C21.3941 21.6087 21.9056 21.6608 22.3698 21.8551C22.8341 22.0494 23.2302 22.3771 23.508 22.7967C23.7858 23.2163 23.9328 23.709 23.9304 24.2122C23.9255 24.8837 23.6557 25.5261 23.1798 25.9998C22.7038 26.4735 22.0601 26.7401 21.3886 26.7417ZM48.5237 26.0585C48.0193 26.0561 47.5269 25.9039 47.109 25.6214C46.6911 25.3388 46.3665 24.9386 46.1763 24.4714C45.9861 24.0041 45.9388 23.491 46.0405 22.9969C46.1422 22.5028 46.3883 22.05 46.7476 21.6959C47.1069 21.3418 47.5632 21.1023 48.0587 21.0078C48.5543 20.9133 49.0667 20.9679 49.5311 21.1649C49.9955 21.3619 50.391 21.6923 50.6674 22.1143C50.9439 22.5362 51.0889 23.0308 51.084 23.5352C51.0759 24.2083 50.8024 24.851 50.3229 25.3235C49.8435 25.7961 49.1969 26.0602 48.5237 26.0585Z"
              fill="#395185"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
