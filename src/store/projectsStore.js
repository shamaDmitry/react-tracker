import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const initData = [
  {
    id: uuidv4(),
    title: 'CartelTech Projects',
    client: 'test client',
    workedTime: 1000000,
  },
  {
    id: uuidv4(),
    title: 'CartelTech Projects lorem',
    client: 'test 2',
    workedTime: 10000000,
  },
  {
    id: uuidv4(),
    title: 'test Projects lorem',
    client: 'client',
    workedTime: 10000000,
  },
];

const useProjectsStore = create((set, get) => ({
  projects:
    JSON.parse(localStorage.getItem('projects')) ||
    localStorage.setItem('projects', JSON.stringify(initData)),
  // setProject: project => {
  //   set({ projects: project });
  // },
  getAllProjects: async () => {
    get().projects;
  },
  getProject: projectId => {
    const filtered = get().projects.filter(project => project.id === projectId);
    return filtered[0];
  },
}));

export default useProjectsStore;