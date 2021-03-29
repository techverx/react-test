
interface IPromocode {
  id: number
  label: string
  description: string
  code: string,
  active: boolean
}

type PromoCodeState = {
  promoCodes: IPromocode[]
}

type PromoCodeAction = {
  type: string
  promocode: IPromocode
}

type DispatchType = (args: PromoCodeAction) => PromoCodeAction