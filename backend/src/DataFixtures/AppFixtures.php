<?php

namespace App\DataFixtures;

use App\Entity\Categorie;
use App\Entity\Film;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Version;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $version = new Version();
        $version->setType("VOST");
        $version2 = new Version();
        $version2->setType("VF");

        $comedie = new Categorie();
        $comedie->setNom("comedie");

        $drame = new Categorie();
        $drame->setNom("drame");

        $fiction = new Categorie();
        $fiction->setNom("fiction");

        $horreur = new Categorie();
        $horreur->setNom("horreur");

        $romance = new Categorie();
        $romance->setNom("romance");
        for ($i = 0; $i < 5; $i++) {

            $film = new Film();
            $film->setTitre("Film" . $i);
            $film->setDuree(150);
            $film->setResume("mon resume n°" . $i);
            if ($i %2 == 0) {
                $film->addVersion($version);
                $version->addFilm($film);
                $film->setCategorie($romance);
                $romance->addFilm($film);
            }
            else {
                $film->setCategorie($comedie);
                $comedie->addFilm($film);
                $film->addVersion($version2);
                $version2->addFilm($film);
            }
            $manager->persist($film);
        }
        $manager->persist($version);
        $manager->persist($version2);
        $manager->persist($fiction);
        $manager->persist($drame);
        $manager->persist($romance);
        $manager->persist($horreur);
        $manager->persist($comedie);
        // $manager->persist($product);

        $user = new User();
        $user->setPassword("tada")
            ->setUsername("gege");

        $manager->persist($user);
        $manager->flush();
    }
}
