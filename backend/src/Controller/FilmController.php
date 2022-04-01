<?php

namespace App\Controller;

use App\Entity\Film;
use App\Repository\CategorieRepository;
use App\Repository\FilmRepository;

use App\Repository\VersionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FilmController extends AbstractController
{
    #[Route('/delete', name: 'app_film')]
    public function index(Request $request, FilmRepository $filmRepository): Response
    {
        $idFilm = $request->query->get("id");
        if ($idFilm == null) {
            return $this->json(
                [
                    'message' => 'Film introuvable',
                    "status" => Response::HTTP_UNAUTHORIZED
                ]
            );
        }

        $film = $filmRepository->find($idFilm);
        if ($film == null) {

            return $this->json(
                [
                    'message' => 'Film introuvable',
                    "status" => Response::HTTP_UNAUTHORIZED
                ]
            );
        }

        $filmRepository->remove($film);
        return $this->json(
            [
                'message' => 'Film supprime',
                "status" => Response::HTTP_OK
            ]
        );
    }

    #[Route('/add', name: 'add-film', methods: ['POST'])]
    public function ajouterFilm(Request $request, FilmRepository $filmRepository,
                                VersionRepository $versionRepository, CategorieRepository $categorieRepository): Response {

        $titre = $request->query->get("titre");
        $version = $request->query->all("version");
        $categorie = $request->query->get("categorie");
        $resume = $request->query->get("resume");
        $duree = intval($request->query->get("duree"));

        $film = new Film();
        $film->setTitre($titre);
        foreach($version as $v) {
            $myversion = $versionRepository->findOneBy(['type' => $v]);
            $film->addVersion($myversion);
            $myversion->addFilm($film);
        }

        $mycategorie = $categorieRepository->findOneBy(['nom' => $categorie]);
        $mycategorie->addFilm($film);
        $film->setCategorie($mycategorie);

        $film->setResume($resume);
        $film->setDuree($duree);

        $filmRepository->add($film);

        return $this->json(
            [
                'message' => "film enregistre",
                "status" => Response::HTTP_OK
            ]
        );
    }

    #[Route('/modify', name: 'modify_film', methods: ['POST'])]
    public function modifier(Request $request,
                             FilmRepository $filmRepository,
                             CategorieRepository $categorieRepository, VersionRepository $versionRepository): Response {
        $id = $request->query->get('id');
        $titre = $request->query->get("titre");
        $version = $request->query->all("version");
        $categorie = $request->query->get("categorie");
        $resume = $request->query->get("resume");
        $duree = intval($request->query->get("duree"));

        $film = $filmRepository->find($id);

        if ($film !== null) {
            $film->setDuree($duree);
            $film->setResume($resume);
            $film->setTitre($titre);
            $mycategorie = $categorieRepository->findOneBy(['nom' => $categorie]);
            $film->setCategorie($mycategorie);
            $mycategorie->addFilm($film);
            foreach($version as $v) {
                $myversion = $versionRepository->findOneBy(['type' => $v]);
                $film->addVersion($myversion);
                $myversion->addFilm($film);
            }
            $filmRepository->add($film);
            return $this->json(
                ['message' => "film modifie",
                    "status" => Response::HTTP_OK]
            );
        }
        return $this->json(
            ['message' => "film introuble",
                "status" => Response::HTTP_UNAUTHORIZED]
        );
    }
}
