package main

//Go script to generate JSON file from text file

import (
	"bufio"
	"log"
	"os"
)

func main() {
	file, err := os.Open("words.txt")
	oFile, oErr := os.OpenFile("../src/words.json", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	key := `"words":`
	if oErr != nil {
		log.Fatalf("Failed creating file %s", oErr)
	}

	if err != nil {
		log.Fatalf("Failed open file %s", err)
	}

	datawriter := bufio.NewWriter(oFile)
	scanner := bufio.NewScanner(file)
	scanner.Split(bufio.ScanLines)
	var txt []string
	for scanner.Scan() {
		txt = append(txt, scanner.Text())
	}
	var y []string
	file.Close()

	for i := 0; i < len(txt); i++ {
		if i != 0 && i != len(txt)-1 {
			y = append(y, `"`, txt[i], `", `)
		} else if i == 0 {
			y = append(y, "{ \n", key, "[", `"`, txt[i], `", `)
		} else if i == len(txt)-1 {
			y = append(y, `"`, txt[i], `"`, "] \n", "}")
		}
	}
	for _, v := range y {
		_, _ = datawriter.WriteString(v)
	}
	datawriter.Flush()
	oFile.Close()

}
