import styles from "@/styles/Character.module.scss"
import Image from "next/image"

interface CharacterProps {
  name?: string
  img?: string
  selected?: boolean
}

export default function CharacterButton({
  name,
  img = "",
  selected
}: CharacterProps) {
  const selectedState = !selected
    ? undefined
    : styles["selected-item"].toString()

  return (
    <div id={styles.wrapper} className={selectedState}>
      <div className={styles["img-wrapper"]}>
        <Image alt={name} src={img} layout="fill" objectFit="cover" priority />
      </div>
      <div className={styles.info}>
        <p>{name}</p>
      </div>
    </div>
  )
}
