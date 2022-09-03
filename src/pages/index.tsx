import CharacterButton from "@/components/CharacterButton"
import styles from "@/styles/Base.module.scss"

export default function Home() {
  return (
    <>
      <div id={styles["grid-content"]}>
        <CharacterButton name="some content" />
        <CharacterButton name="some content" />
        <CharacterButton name="some content" />
        <CharacterButton name="some content" />
        <CharacterButton name="some content" />
        <CharacterButton name="some content" />
      </div>
    </>
  )
}
