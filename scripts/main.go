package main

//Go script to generate JSON file from text file

import (
	"bufio"
	"log"
	"os"
)

func main() {
	inputFile, err := os.Open("words.txt")
	outputFile, oErr := os.OpenFile("../src/words.json", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	key := `"words":`

	if oErr != nil {
		log.Fatalf("Failed creating file %s", oErr)
	}

	if err != nil {
		log.Fatalf("Failed open file %s", err)
	}
	//Read text file
	datawriter := bufio.NewWriter(outputFile)
	scanner := bufio.NewScanner(inputFile)
	scanner.Split(bufio.ScanLines)
	var txt []string
	for scanner.Scan() {
		txt = append(txt, scanner.Text())
	}
	var json []string
	inputFile.Close()

	//Create json string
	for i := 0; i < len(txt); i++ {
		if i != 0 && i != len(txt)-1 {
			json = append(json, `"`, txt[i], `", `)
		} else if i == 0 {
			json = append(json, "{ \n", key, "[", `"`, txt[i], `", `)
		} else if i == len(txt)-1 {
			json = append(json, `"`, txt[i], `"`, "] \n", "}")
		}
	}

	//Output file
	for _, v := range json {
		_, _ = datawriter.WriteString(v)
	}
	datawriter.Flush()
	outputFile.Close()

}
