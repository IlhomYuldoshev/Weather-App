export const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export const getNormalDate = (d) => {
  const date = new Date(d)
  const normalDate = `${weekdays[date.getDay() - 1]} ${date.getHours()}:${date.getMinutes()}`
  return normalDate
}
