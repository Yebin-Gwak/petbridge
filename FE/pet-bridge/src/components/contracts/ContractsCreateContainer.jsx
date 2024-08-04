import {selectId, selectImage, selectNickname} from "features/user/users-slice"
import {useSelector} from "react-redux"
import ContractDetail from "components/contracts/ContractDetail"
import ContractAnimal from "components/contracts/ContractAnimal"
import ContractPerson from "components/contracts/ContractPerson"
import {useEffect, useState} from "react"
import {postContract} from "api/contracts-api"
import {useNavigate} from "react-router-dom"
import SearchDropDown from "components/common/SearchDropDown"
import AnimalTag from "components/common/AnimalTag"
const ContractsCreateContainer = () => {
  const navigate = useNavigate()
  const userId = useSelector(selectId)
  const nickname = useSelector(selectNickname)
  const userImage = useSelector(selectImage)
  // 동물 선택 상태에 따른 동물 컴포넌트 표시 - 상태 관리
  const [selectedAnimal, setSelectedAnimalId] = useState(null)
  const [selectedContracteeId, setSelectedContracteeId] = useState(null)
  const [isContracteeSelected, setIsContracteeSelected] = useState(false)
  const [contractFormData, setContractFormData] = useState({
    contractorId: "contractorId",
    contracteeId: "contracteeId",
    animalId: "animalId",
    month: "month",
    payment: "payment",
    content: "content",
  })

  // 초기 로드시
  useEffect(() => {
    setContractFormData((prevData) => ({
      ...prevData,
      contractorId: userId,
    }))
  }, [])

  // 데이터 변경시
  useEffect(() => {
    setContractFormData((prevData) => ({
      ...prevData,
      animalId: selectedAnimal,
      contracteeId: selectedContracteeId,
    }))
  }, [selectedAnimal, selectedContracteeId])

  // 제출 정보

  // 1 ~ 12개월 계약 기간 선택을 위한 숫자
  const monthsOption = Array.from({length: 12}, (_, index) => index + 1)

  // 동물 선택
  const handleAnimalSelect = (id) => {
    setSelectedAnimalId(id)
  }

  // 계약서 작성하기 클릭시 동작
  const onSubmitHandler = async (event) => {
    event.preventDefault()
    console.log(contractFormData)
    // 폼의 유효성 검사
    try {
      // 비동기 요청 (계약서 작성)
      const res = await postContract(contractFormData)
      console.log(res)
      if (res.data) {
        // 비동기 요청 결과로, 성공시 마이페이지 계약서 목록으로 라우팅
        navigate(`/users/${contractFormData.contractorId}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // 입력값이 변경되면 행동할 Handler 정의
  const changeHandler = (event) => {
    const target = event.target
    const id = target.id

    // 입력 값과 FormData를 연동시킴
    setContractFormData({
      ...contractFormData,
      [id]: target.value,
    })
  }

  // 선택 드롭다운 값 변경시
  const onDataChangeHandler = (newData) => {
    setSelectedContracteeId(newData)
    if (newData) {
      setIsContracteeSelected(true)
    }
  }

  return (
    <div
      className="my-10 flex w-[1000px] flex-col items-center space-y-10"
      onSubmit={onSubmitHandler}
    >
      <span className="text-4xl font-bold">입양 보내기</span>
      <section className="w-full">
        <div className="grid w-full grid-cols-4">
          {/* 입양 동물 정보란 */}
          {selectedAnimal ? (
            <div className="col-span-2 rounded-l-xl border p-2.5">
              <AnimalTag onSelectAnimalId={handleAnimalSelect} />
              <ContractAnimal
                isCreate={true}
                imageSrc="imgScr"
                name="name"
                kind="kind"
                age="3살"
              />
            </div>
          ) : (
            <div className="col-span-2 rounded-l-xl border p-2.5">
              아직 보호중인 동물을 선택하지 않았어요. 입양갈 동물을 선택해주세요
              <div>
                <AnimalTag onSelectAnimalId={handleAnimalSelect} />
              </div>
            </div>
          )}

          {/* 임보자 정보란 */}
          <ContractPerson
            imageSrc={userImage}
            title="보호자"
            nickname={nickname}
          />
          {/* 입양자 정보란 */}
          {isContracteeSelected ? (
            <>
              <ContractPerson
                imageSrc="입양자 이미지"
                title="입양자"
                nickname="입양자 닉네임"
              />
            </>
          ) : (
            <div className="col-span-1 rounded-r-xl border p-2.5">
              아직 동물이 입양갈 곳을 찾지 못했어요. 입양자를 선택해주세요
              <div>
                <SearchDropDown
                  subtitle="유저를 선택해주세요."
                  placeholder="유저 닉네임으로 검색"
                  itemName="유저"
                  onDataChange={onDataChangeHandler}
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="w-full">
        <span className="text-4xl font-bold">계약서 작성 폼</span>
        <p className="font-bold">
          - 입양자가 계약을 이행할 시간을 선택해주세요. (1 ~ 12 개월)
        </p>
        <select
          name="month"
          id="month"
          className="rounded-lg border-2"
          onChange={changeHandler}
        >
          {monthsOption.map((item) => (
            <option key={item} value={item}>
              <span>{item} 개월</span>
            </option>
          ))}
        </select>
        <p className="font-bold">- 계약 금액을 선택해주세요.</p>
        <input
          id="payment"
          type="number"
          placeholder="계약 금액"
          className="rounded-lg border-2"
          onChange={changeHandler}
        />
        <p className="font-bold">
          - 추가적으로 이행할 특약 내용을 자유롭게 입력해주세요.
        </p>
        <textarea
          name="content"
          id="content"
          className="border-2"
          placeholder="특약 내용"
          onChange={changeHandler}
        ></textarea>
      </section>

      <div className="flex h-[600px] w-full flex-col items-center rounded-2xl bg-stroke p-5">
        <p className="my-10 text-4xl font-bold">계약서 미리보기</p>
        <ContractDetail
          contractorNickname={nickname}
          contracteeNickname="(계약자 닉네임)"
          animalName={contractFormData.animalName}
          month={contractFormData.month}
          payment={contractFormData.payment}
          content={contractFormData.content}
        />
      </div>

      {/* 클릭시 form 제출 */}
      <button
        type="button"
        onClick={onSubmitHandler}
        className="h-10 w-40 rounded-xl border-2 bg-mild"
      >
        계약서 작성하기
      </button>
    </div>
  )
}

export default ContractsCreateContainer
