import React, { useState } from "react";
import Modal from "../Modal";


const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projects] = useState([
    {
      name: 'Who-Do',
      description: 'An application to find the hottest events taking place in Austin, TX. Easily sign up and RSVP to your favorite upcoming events.',
      github: 'https://github.com/KevinHeaton/who-do',
      deployed: 'https://safe-scrubland-88358.herokuapp.com/',
      pic: 'Who-Do'
    },
    {
      name: 'SuperWiki',
      description: 'Quickly find information on your favorite Marvel Characters!',
      github: 'https://github.com/KevinHeaton/Super-Hero-Wiki',
      deployed: 'https://kevinheaton.github.io/Super-Hero-Wiki/',
      pic: 'SuperWiki'
    },
    {
      name: 'Photo-Port',
      description: "A project using React to showcase an example of a photographer's portfolio.",
      github: 'https://github.com/KevinHeaton/photo-port',
      deployed: 'https://kevinheaton.github.io/photo-port/',
      pic: 'photo-port'
    },
    {
      name: 'WorkdayScheduler',
      description: 'Manage your workday by keeping track of your meetings and other events in an easy to read hourly format.',
      github: 'https://github.com/KevinHeaton/Workday-Scheduler',
      deployed: 'https://kevinheaton.github.io/Workday-Scheduler/',
      pic: 'workday-scheduler'
    },
    {
      name: 'RobotGladiators',
      description: 'Battle your robot against the best of the best to see if you have got what it takes!',
      github: 'https://github.com/KevinHeaton/robot-gladiators',
      deployed: 'https://kevinheaton.github.io/robot-gladiators/',
      pic: 'Robot-Gladiators'
    },
    {
      name: 'Taskinator',
      description: 'Keep track of your tasks in a kanban board format.',
      github: 'https://github.com/KevinHeaton/taskinator',
      deployed: 'https://kevinheaton.github.io/taskinator/',
      pic: 'taskinator'
    },
    {
      name: 'RunBuddy',
      description: 'The front end HTML and CSS to a to an athletic trainer site.',
      github: 'https://github.com/KevinHeaton/run-buddy',
      deployed: 'https://kevinheaton.github.io/run-buddy/',
      pic: 'run-buddy'
    },
    {
      name: 'TaskmasterPro',
      description: 'A kanban board where you can save your tasks with a due date.',
      github: 'https://github.com/KevinHeaton/taskmaster-pro',
      deployed: 'https://kevinheaton.github.io/taskmaster-pro/',
      pic: 'Taskmaster-pro'
    },
    {
      name: 'TeamProfileGenerator',
      description: 'Organize your employees by using the command line. (Project Repo and deployed site are the same.)',
      github: 'https://github.com/KevinHeaton/Team-Profile-Generator',
      deployed: 'https://github.com/KevinHeaton/Team-Profile-Generator',
      pic: 'Team-Profile-Generator'
    },
    {
      name: 'RegexTutorial',
      description: 'A walkthorugh of how regex can be used to validate an email. (Project Repo and deployed site are the same.)',
      github: 'https://gist.github.com/KevinHeaton/f9d9608ebc9886abf39643c4be56f80b',
      deployed: 'https://gist.github.com/KevinHeaton/f9d9608ebc9886abf39643c4be56f80b',
      pic: 'Regex-Tutorial'
    }
  ])

  const [currentProject, setCurrentProject] = useState();
  const toggleModal = (image, i) => {
    setCurrentProject({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
    {isModalOpen && (
    <Modal currentProject={currentProject} onClose={toggleModal} />
    )}
    <div className="flex-row">
      {projects.map((image, i) => (
        <img id={image.name} className='img-thumbnail' src={require(`../../assets/images/projects/${image.pic}.png`)}
        alt={image.name}
        onClick={() => toggleModal(image, i)}
        key={image.name}
      />
      ))}
    </div>
  </div>
  )
}

export default ProjectList;