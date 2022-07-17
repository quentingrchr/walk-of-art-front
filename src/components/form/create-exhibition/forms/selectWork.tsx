import { Button } from "@components/button";
import { Cards } from "@components/cards";
import { Icon } from "@components/icon";
import { axiosInstance } from "@utility/index";
import { useState, useEffect } from "react";
import cardImage from '../../../../assets/images/cardImg.png'
import formOneStyle from "./formOne.module.scss"


interface SelectWorkProps {
    selectedWork?: [];
    setSelectedWork: () => {};
    updateTitle: (arg: string) => void,
    selectedWorkId: (arg: string) => void,
  }

export const SelectWork: React.FC<SelectWorkProps> = ({
    updateTitle, selectedWorkId
  }: SelectWorkProps) => {
  
    const [works, setWorks] = useState<any[]>([]);
    const [selectedWork, setSelectedWork] = useState<any>()
  
  
    const handleImageClick = (selectedWork) => {
      selectedWorkId(selectedWork.id)
      setSelectedWork(selectedWork)
    }
  
    const handleBack = () => {
      setSelectedWork([])
    }
  
    const getAllWorks = () => {
      return axiosInstance.get('/works')
        .then(response => {
          return setWorks(response.data);
        }).catch((error) => {
          return error
        })
    }
  
    useEffect(() => {
      getAllWorks()
    }, [])
  
    const titleText = selectedWork ? "Choix de l’oeuvre" : "Sélection de l’oeuvre"
  
    const previousSelectedWork = () => {
      const currentIndex = works.findIndex(work => work.id === selectedWork.id);
      if(currentIndex > 0) {
        setSelectedWork(works[currentIndex - 1])
      } else {
        setSelectedWork(works[works.length - 1])
      }
    }
  
    const nextSelectedWork = () => {
      const currentIndex = works.findIndex(work => work.id === selectedWork.id);
      if(currentIndex < works.length - 1) {
        setSelectedWork(works[currentIndex + 1])
      } else {
        setSelectedWork(works[0])
      }
    }
    return (
      <div>
        <h3 className={formOneStyle.selectionTitle}>{titleText}</h3>
        <div className={formOneStyle.selectionContainer}>
          {
            selectedWork ?
              <div className={formOneStyle.selectionChoice}>
                <div className={formOneStyle.containerSelectedExhibition}>
                  <div className={formOneStyle.selectCheckIcon}>
                    <Icon classname={formOneStyle.arrow} type={"selectCheck"} size={"none"} />
                  </div>
                  <div className={formOneStyle.cardContainer}>
                    <Icon classname={formOneStyle.arrowLeft} type={"chevronLeft"} size={"small"} onClick={previousSelectedWork} />
  
                      <Cards title={selectedWork.title} img={cardImage.src} showLink={true} />
                    <Icon classname={formOneStyle.arrowRight} type={"chevronRight"} size={"small"} onClick={nextSelectedWork} />
  
                  </div>
                </div>
  
                <div className={formOneStyle.ctas}>
                  <Button label={"Utiliser le titre comme titre d’exposition"} color="black" bg="light" onClick={() => updateTitle(selectedWork.title)}/>
                  <div className={formOneStyle.link}>
                    <Button label={"Accéder à l’oeuvre"} color="black" bg="light" to={`${window.location.origin}/artist/work/${selectedWork.id}`} />
                  </div>
                  <div className={formOneStyle.modify} onClick={handleBack}>
                    <Button label={"Modifier"} color="white" bg="dark" type="submit" />
                  </div>
                </div>
              </div>
              :
              <div className={formOneStyle.selectWorks}>
                {works.map((work) => (
                  <Cards
                    key={work.id}
                    title={work.title}
                    img={work.mainFile ? work.mainFile.fileUrl : null}
                    handleClick={() => handleImageClick(work)}
                    showLink={false} />
                ))
                }
              </div>
          }
        </div>
      </div>
    )
  }