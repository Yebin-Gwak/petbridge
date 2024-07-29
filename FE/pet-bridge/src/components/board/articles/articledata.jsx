const articledata = [
  // 카테고리 1: 입양홍보
  {
    id: 1,
    nickname: "Alice",
    authorImage: "https://via.placeholder.com/30",
    category: 1,
    title:
      "귀여운 강아지가 입양을 기다립니다 귀여운 강아지가 입양을 기다립니다 귀여운 강아지가 입양을 기다립니다 귀여운 강아지가 입양을 기다립니다",
    content: "사랑스러운 강아지가 새로운 가족을 찾고 있습니다.",
    count: 5,
    thumbnail: "https://via.placeholder.com/300",
    name: "Buddy",
    process_state: "입양중",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007876.jpeg",
  },
  {
    id: 2,
    nickname: "Bob",
    authorImage: "https://via.placeholder.com/30",
    category: 1,
    title: "사랑스러운 고양이가 새로운 집을 기다립니다",
    content: "애정 가득한 고양이가 당신의 가족이 되기를 바랍니다.",
    count: 8,
    thumbnail: "https://via.placeholder.com/300",
    name: "Whiskers",
    process_state: "입양가능",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007877.jpeg",
  },
  {
    id: 3,
    nickname: "Charlie",
    authorImage: "https://via.placeholder.com/30",
    category: 1,
    title: "친절한 강아지가 가족을 찾고 있습니다",
    content: "활기찬 강아지가 사랑스러운 가족을 찾고 있습니다.",
    count: 2,
    thumbnail: "https://via.placeholder.com/300",
    name: "Max",
    process_state: "입양가능",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007878.jpeg",
  },
  {
    id: 4,
    nickname: "Daisy",
    authorImage: "https://via.placeholder.com/30",
    category: 1,
    title: "상냥한 토끼가 입양을 기다립니다",
    content: "상냥한 토끼가 새로운 가족을 찾고 있습니다.",
    count: 3,
    thumbnail: "https://via.placeholder.com/300",
    name: "Fluffy",
    process_state: "보호중",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007879.jpeg",
  },
  {
    id: 5,
    nickname: "Edward",
    authorImage: "https://via.placeholder.com/30",
    category: 1,
    title: "새로운 가족을 기다리는 앵무새",
    content: "수다쟁이 앵무새가 사랑 가득한 가족을 찾고 있습니다.",
    count: 4,
    thumbnail: "https://via.placeholder.com/300",
    name: "Polly",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007880.jpeg",
  },
  {
    id: 6,
    nickname: "Fiona",
    authorImage: "https://via.placeholder.com/30",
    category: 1,
    title: "사랑스러운 햄스터가 새로운 보호자를 찾고 있습니다",
    content: "이 활기찬 햄스터는 사랑과 에너지가 가득합니다.",
    count: 6,
    thumbnail: "https://via.placeholder.com/300",
    name: "Nibbles",
    process_state: "입양중",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007881.jpeg",
  },
  {
    id: 7,
    nickname: "George",
    authorImage: "https://via.placeholder.com/30",
    category: 1,
    title: "새로운 연못을 찾고 있는 거북이",
    content: "차분한 거북이가 새로운 연못을 찾고 있습니다.",
    count: 1,
    thumbnail: "https://via.placeholder.com/300",
    name: "Shelly",
    process_state: "입양가능",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007882.jpeg",
  },
  {
    id: 8,
    nickname: "Hannah",
    authorImage: "https://via.placeholder.com/30",
    category: 1,
    title: "기니피그가 새로운 가족을 원합니다",
    content: "상냥한 기니피그가 당신의 가족이 되기를 희망합니다.",
    count: 5,
    thumbnail: "https://via.placeholder.com/300",
    name: "Pip",
    process_state: "보호중",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007883.jpeg",
  },
  {
    id: 9,
    nickname: "Isaac",
    authorImage: "https://via.placeholder.com/30",
    category: 1,
    title: "새로운 수족관을 찾고 있는 금붕어",
    content: "이 금붕어들은 어느 집에서나 차분한 분위기를 만들어줍니다.",
    count: 7,
    thumbnail: "https://via.placeholder.com/300",
    name: "Goldie",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007884.jpeg",
  },
  {
    id: 10,
    nickname: "Julia",
    authorImage: "https://via.placeholder.com/30",
    category: 1,
    title: "친칠라가 사랑스러운 가족을 찾고 있습니다",
    content: "친근한 친칠라가 새로운 가족을 기다리고 있습니다.",
    count: 9,
    thumbnail: "https://via.placeholder.com/300",
    name: "Chilla",
    process_state: "입양중",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007885.jpeg",
  },

  // 카테고리 2: 입양후기
  {
    id: 11,
    nickname: "Kevin",
    authorImage: "https://via.placeholder.com/30",
    category: 2,
    title: "성공적인 강아지 입양 이야기",
    content: "우리 강아지가 우리 집에서 행복하게 정착했습니다.",
    count: 3,
    thumbnail: "https://via.placeholder.com/300",
    name: "Buddy",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007886.jpeg",
  },
  {
    id: 12,
    nickname: "Laura",
    authorImage: "https://via.placeholder.com/30",
    category: 2,
    title: "고양이의 영원한 집으로의 여정",
    content: "우리 고양이는 이제 사랑 가득한 가족의 일원이 되었습니다.",
    count: 5,
    thumbnail: "https://via.placeholder.com/300",
    name: "Whiskers",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007887.jpeg",
  },
  {
    id: 13,
    nickname: "Michael",
    authorImage: "https://via.placeholder.com/30",
    category: 2,
    title: "새로운 친구를 입양한 강아지 이야기",
    content: "우리 강아지는 이제 가족의 중요한 일원이 되었습니다.",
    count: 2,
    thumbnail: "https://via.placeholder.com/300",
    name: "Max",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007888.jpeg",
  },
  {
    id: 14,
    nickname: "Nina",
    authorImage: "https://via.placeholder.com/30",
    category: 2,
    title: "상냥한 토끼의 행복한 집",
    content: "우리 토끼가 우리 집에 행복을 가져다 주었습니다.",
    count: 4,
    thumbnail: "https://via.placeholder.com/300",
    name: "Fluffy",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007889.jpeg",
  },
  {
    id: 15,
    nickname: "Oscar",
    authorImage: "https://via.placeholder.com/30",
    category: 2,
    title: "앵무새 입양: 화려한 성공",
    content: "우리 앵무새는 이제 가족의 중요한 일원이 되었습니다.",
    count: 6,
    thumbnail: "https://via.placeholder.com/300",
    name: "Polly",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007890.jpeg",
  },
  {
    id: 16,
    nickname: "Paul",
    authorImage: "https://via.placeholder.com/30",
    category: 2,
    title: "사랑스러운 햄스터의 영원한 집",
    content: "우리 햄스터는 이제 사랑스러운 가족의 일원이 되었습니다.",
    count: 7,
    thumbnail: "https://via.placeholder.com/300",
    name: "Nibbles",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007891.jpeg",
  },
  {
    id: 17,
    nickname: "Quincy",
    authorImage: "https://via.placeholder.com/30",
    category: 2,
    title: "거북이의 새로운 연못 이야기",
    content: "우리 거북이는 이제 새로운 연못에서 행복합니다.",
    count: 5,
    thumbnail: "https://via.placeholder.com/300",
    name: "Shelly",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007892.jpeg",
  },
  {
    id: 18,
    nickname: "Rachel",
    authorImage: "https://via.placeholder.com/30",
    category: 2,
    title: "기니피그의 새로운 가족 이야기",
    content: "우리 기니피그는 이제 가족의 소중한 일원이 되었습니다.",
    count: 9,
    thumbnail: "https://via.placeholder.com/300",
    name: "Pip",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007893.jpeg",
  },
  {
    id: 19,
    nickname: "Steve",
    authorImage: "https://via.placeholder.com/30",
    category: 2,
    title: "금붕어의 새로운 수족관",
    content: "우리 금붕어는 이제 새로운 수족관에서 행복하게 지내고 있습니다.",
    count: 6,
    thumbnail: "https://via.placeholder.com/300",
    name: "Goldie",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007894.jpeg",
  },
  {
    id: 20,
    nickname: "Tina",
    authorImage: "https://via.placeholder.com/30",
    category: 2,
    title: "친칠라 입양 성공기",
    content: "우리 친칠라는 이제 가족의 사랑을 받고 있습니다.",
    count: 8,
    thumbnail: "https://via.placeholder.com/300",
    name: "Chilla",
    process_state: "입양완료",
    filename:
      "http://www.animal.go.kr/files/shelter/2024/07/202407161007895.jpeg",
  },

  // 카테고리 3: 자유게시판
  {
    id: 21,
    nickname: "Uma",
    authorImage: "https://via.placeholder.com/30",
    category: 3,
    title: "반려동물 입양 팁",
    content: "반려동물을 입양할 때의 팁과 경험을 공유해주세요.",
    count: 3,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 22,
    nickname: "Victor",
    authorImage: "https://via.placeholder.com/30",
    category: 3,
    title: "최고의 반려동물 이야기",
    content: "당신의 반려동물에 대한 최고의 이야기를 공유해주세요.",
    count: 5,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 23,
    nickname: "Wendy",
    authorImage: "https://via.placeholder.com/30",
    category: 3,
    title: "반려동물 돌보는 법",
    content: "반려동물을 돌보는 가장 좋은 방법을 논의해보세요.",
    count: 6,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 24,
    nickname: "Xavier",
    authorImage: "https://via.placeholder.com/30",
    category: 3,
    title: "웃긴 반려동물 순간들",
    content: "당신의 반려동물과의 웃긴 순간들을 공유해주세요.",
    count: 4,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 25,
    nickname: "Yara",
    authorImage: "https://via.placeholder.com/30",
    category: 3,
    title: "반려동물 건강 질문",
    content: "반려동물 건강에 대한 질문과 조언을 나누어보세요.",
    count: 2,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 26,
    nickname: "Zack",
    authorImage: "https://via.placeholder.com/30",
    category: 3,
    title: "입양 성공담",
    content: "반려동물 입양에 성공한 이야기를 나눠보세요.",
    count: 5,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 27,
    nickname: "Amy",
    authorImage: "https://via.placeholder.com/30",
    category: 3,
    title: "아이들과 반려동물",
    content: "아이들과 반려동물이 잘 지낼 수 있는 방법을 논의해보세요.",
    count: 8,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 28,
    nickname: "Ben",
    authorImage: "https://via.placeholder.com/30",
    category: 3,
    title: "특이한 반려동물 돌보기",
    content: "특이한 반려동물을 돌보는 방법에 대해 조언을 나눠보세요.",
    count: 1,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 29,
    nickname: "Cara",
    authorImage: "https://via.placeholder.com/30",
    category: 3,
    title: "반려동물 훈련 팁",
    content: "반려동물을 훈련하는 팁과 기술에 대해 논의해보세요.",
    count: 4,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 30,
    nickname: "Dave",
    authorImage: "https://via.placeholder.com/30",
    category: 3,
    title: "반려동물 사료 추천",
    content: "반려동물 사료 추천을 공유해보세요.",
    count: 6,
    thumbnail: "https://via.placeholder.com/300",
  },

  // 카테고리 4: 공지사항
  {
    id: 31,
    nickname: "Ella",
    authorImage: "https://via.placeholder.com/30",
    category: 4,
    title: "다가오는 입양 행사",
    content: "다가오는 반려동물 입양 행사에 참여해보세요.",
    count: 2,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 32,
    nickname: "Frank",
    authorImage: "https://via.placeholder.com/30",
    category: 4,
    title: "여름철 반려동물 케어 공지",
    content: "여름철 반려동물 케어 방법에 대한 공지입니다.",
    count: 4,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 33,
    nickname: "Grace",
    authorImage: "https://via.placeholder.com/30",
    category: 4,
    title: "신규 입양 절차 안내",
    content: "신규 반려동물 입양 절차에 대한 안내입니다.",
    count: 3,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 34,
    nickname: "Henry",
    authorImage: "https://via.placeholder.com/30",
    category: 4,
    title: "겨울철 반려동물 건강 관리 공지",
    content: "겨울철 반려동물 건강 관리에 대한 공지입니다.",
    count: 5,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 35,
    nickname: "Isla",
    authorImage: "https://via.placeholder.com/30",
    category: 4,
    title: "입양 후 반려동물 관리 팁",
    content: "입양 후 반려동물 관리에 대한 유용한 팁을 안내합니다.",
    count: 6,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 36,
    nickname: "Jack",
    authorImage: "https://via.placeholder.com/30",
    category: 4,
    title: "반려동물 등록 절차 변경 안내",
    content: "반려동물 등록 절차 변경에 대한 안내입니다.",
    count: 1,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 37,
    nickname: "Kira",
    authorImage: "https://via.placeholder.com/30",
    category: 4,
    title: "반려동물 건강 검사 캠페인",
    content: "반려동물 건강 검사 캠페인에 참여해보세요.",
    count: 7,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 38,
    nickname: "Liam",
    authorImage: "https://via.placeholder.com/30",
    category: 4,
    title: "입양자 교육 프로그램 안내",
    content: "입양자 교육 프로그램에 대한 안내입니다.",
    count: 8,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 39,
    nickname: "Mia",
    authorImage: "https://via.placeholder.com/30",
    category: 4,
    title: "반려동물 산책 캠페인",
    content: "반려동물과 함께하는 산책 캠페인에 참여해보세요.",
    count: 2,
    thumbnail: "https://via.placeholder.com/300",
  },
  {
    id: 40,
    nickname: "Nathan",
    authorImage: "https://via.placeholder.com/30",
    category: 4,
    title: "입양 후 지원 서비스 안내",
    content: "입양 후 지원 서비스에 대한 안내입니다.",
    count: 4,
    thumbnail: "https://via.placeholder.com/300",
  },
]

export default articledata
